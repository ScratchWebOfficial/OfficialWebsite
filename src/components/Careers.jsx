import React, { useEffect, useState } from "react";
import "../styles/Careers.css";
import { FaMapMarkerAlt, FaPen, FaClock, FaTags, FaPlus, FaEdit,FaBriefcase } from "react-icons/fa";
import careerhighlight from "../assets/careerhighlight.png";
import perksimage from "../assets/perksimage.png";

const Careers = () => {
  // 🔹 States
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    department: "",
    experience: "",
    skills: "",
    description: "",
  });

  // 🔹 Fetch all jobs from backend
  const fetchJobs = () => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  //  Create list of unique cities
  const cities = [...new Set(jobs.map((job) => job.location))];

  //  Filter logic
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchCity = selectedCity ? job.location === selectedCity : true;
      const matchSearch = searchTerm
        ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.skills.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchCity && matchSearch;
    });
    setFilteredJobs(filtered);
  }, [selectedCity, searchTerm, jobs]);

  //  Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Handle form submit (POST or PUT request)
  const handleSubmit = (e) => {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:5000/api/jobs/${currentJobId}`
      : "http://localhost:5000/api/jobs";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setShowForm(false);
        setIsEditing(false);
        setCurrentJobId(null);
        setFormData({
          title: "",
          location: "",
          department: "",
          experience: "",
          skills: "",
          description: "",
        });
        fetchJobs();
      })
      .catch((err) => console.error("Error submitting job:", err));
  };

  // 🔹 Handle Edit button click
  const handleEdit = (job) => {
    setFormData({
      title: job.title,
      location: job.location,
      department: job.department,
      experience: job.experience,
      skills: job.skills,
      description: job.description,
    });
    setCurrentJobId(job._id);
    setIsEditing(true);
    setShowForm(true);
  };

  // 🔹 Handle Cancel
  const handleCancel = () => {
    setShowForm(false);
    setIsEditing(false);
    setCurrentJobId(null);
    setFormData({
      title: "",
      location: "",
      department: "",
      experience: "",
      skills: "",
      description: "",
    });
  };

  return (
    <div className="careers-page">
      {/* ---------- Search Filters ---------- */}
      <div className="careers-search">
        <select
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Job title / keywords"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="search-btn">Search</button>
      </div>

      {/* ---------- Create Job Button ---------- */}
      <div className="create-job-container">
        <button
          className="create-job-btn"
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setFormData({
              title: "",
              location: "",
              department: "",
              experience: "",
              skills: "",
              description: "",
            });
          }}
        >
          <FaPlus /> Create Job
        </button>
      </div>

      {/* ---------- Job Form Modal ---------- */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-modal">
            <h2>{isEditing ? "Edit Job" : "Create New Job"}</h2>
            <form onSubmit={handleSubmit} className="job-form">
              <input
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
              />
              <input
                name="experience"
                placeholder="Experience (e.g. 2-5 Years)"
                value={formData.experience}
                onChange={handleChange}
              />
              <input
                name="skills"
                placeholder="Skills (comma-separated)"
                value={formData.skills}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Job Description"
                value={formData.description}
                onChange={handleChange}
              />
              <div className="form-buttons">
                <button type="submit" className="submit-btn">
                  {isEditing ? "Update Job" : "Submit"}
                </button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------- Heading ---------- */}
      <div className="careers-heading">
        <h2>
          LATEST JOBS IN <span className="blue">WORDSYS</span>
        </h2>
        <div className="sort-options">
          <span>SORT BY: </span>
          <a href="#recent" className="active">
            MOST RECENT
          </a>
          <a href="#popular">MOST POPULAR</a>
        </div>
      </div>

      {/* ---------- Job Cards ---------- */}
      <div className="job-grid">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <p className="post-date">
                Posted:{" "}
                {job.createdAt
                  ? new Date(job.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Date unavailable"}
              </p>
              <h3>{job.title}</h3>
              <ul className="job-meta">
                <li>
                  <FaMapMarkerAlt /> {job.location}
                </li>
                <li>
                  <FaPen /> {job.department}
                </li>
                <li>
                  <FaClock /> {job.experience}
                </li>
                <li>
                  <FaTags /> {job.skills}
                </li>
              </ul>
              {job.description && (
                <p className="job-description">
                  {job.description.length > 120
                    ? job.description.slice(0, 120) + "..."
                    : job.description}
                </p>
              )}
              <div className="job-actions">
                <button className="view-btn">VIEW JOB</button>
                
                <FaEdit
                  className="edit-icon-inline"
                  onClick={() => handleEdit(job)}
                />
                  
          
              </div>
            </div>
          ))
        )}
      </div>

      {/* ---------- Remaining Sections ---------- */}
      <div className="career-perks-section">
        <p className="career-subtitle">Whatever Be Your Goals</p>
        <h2 className="career-title">
          Grab The Right Opportunities To Hone Your Craft
        </h2>
        <div className="career-perks-grid">
          <div className="perk-item">
            <span className="perk-number">01</span>
            <p className="perk-label">Amazing Work Culture</p>
          </div>
          <div className="perk-item">
            <span className="perk-number">02</span>
            <p className="perk-label">Competitive Pay Package</p>
          </div>
          <div className="perk-item">
            <span className="perk-number">03</span>
            <p className="perk-label">Employee-Friendly HR Policies</p>
          </div>
        </div>
      </div>

      <div className="career-highlight-section">
        <div className="career-highlight-image">
          <img
            src={careerhighlight}
            alt="Career Collaboration"
            className="highlight-img"
          />
        </div>
        <div className="career-highlight-content">
          <h3>
            <span className="blue-text">Get Set To Hone Your Craft</span>{" "}
            <span className="bold-text">With A Lucrative Career At Wordsys</span>
          </h3>
          <div className="underline"></div>
          <p>
            In today’s competitive digital era, there are aspiring talents
            galore with distinct skills and prowess, who are ready to combat
            any challenge with utmost aplomb! Being India’s leading IT and
            marketing company, we aim to underscore such talents, and lend them
            the right platforms and opportunities to hone their crafts.
          </p>
          <p>
            We remain true to our commitment to valuing the differences and
            strengths of every employee, individually. We provide a healthy work
            environment, which once experienced, is hard to forget! Over the
            years, we have delighted clients worldwide to their utmost
            satisfaction with – sharing knowledge, handling complex challenges,
            and driving innovation in their businesses.
          </p>
          <p>
            Come, join us to add wings to your dreams and an edge to your career!
          </p>
          <button className="join-btn">JOIN US</button>
        </div>
      </div>

      <div className="career-perks-detail-section">
        <div className="perks-left">
          <h3>
            <span className="blue-text">Perks</span>{" "}
            <span className="bold-text">Of Working With Us</span>
          </h3>
          <div className="underline"></div>
          <p>
            “Employee-friendly” – is our watchword at Wordsys! To fuel up
            productivity and our employees’ spirits, we keep up with a
            stress-free work environment. Some of our major perks include
            Flexible Work Hours, Work-From-Home Facilities, Competitive
            Pay-Scale, Performance Appraisal Hikes, Yearly Increment, Generous
            Leaves, and more!
          </p>

          <h4 className="career-link-title">Build Your Career with Wordsys:</h4>
          <ul className="career-roles-list">
            <li>Senior Software Developer (PHP)</li>
            <li>Website Designer</li>
            <li>SEO Content Writer</li>
          </ul>
        </div>

        <div className="perks-right">
          <img src={perksimage} alt="Perks" className="perks-img" />
        </div>
      </div>
    </div>
  );
};

export default Careers;
