// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ITConsultingSection from "./components/ITConsultingSection";
import CoreServicesSection from "./components/CoreServicesSection";
import DigitalMarketingGrid from "./components/DigitalMarketingGrid";
import QuerySection from "./components/QuerySection";
import MarketingBenefitCard from "./components/MarketingBenefitCard";
import Test from "./components/Test";
import MilestoneSection from "./components/MilestoneSection";
import FooterMegaMenu from "./components/FooterMegaMenu";
import BlockchainSection from "./components/BlockchainSection";
import AI from "./components/AI";
import PHPSection from "./components/PHPSection";
import CustomUISection from "./components/CustomUISection";
import CustomSoftwareSection from "./components/CustomSoftwareSection"; // ✅ New import
import HealthcareSection from "./components/HealthcareSection";
import ConstructionPage from './components/ConstructionPage';
import RetailSection from './components/RetailSection';
import InfotechSection from './components/InfotechSection';
import AutomotiveSection from './components/AutomotiveSection';
import AboutUsSection from './components/AboutUsSection';
import Careers from './components/Careers';
import NewsSection from './components/NewsSection';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import CaseStudySection from './components/CaseStudySection';
import PortfolioSection from './components/PortfolioSection';
import FullStackSection from './components/FullStackSection';
import ITSection from './components/ITSection';
import SoftwareTestingSection from './components/SoftwareTestingSection';
import DigitalMarketingSection from './components/DigitalMarketingSection';
import OutsourcedProductSection from './components/OutsourcedProductSection';
import SoftwareDevItOpsSection from './components/SoftwareDevItOpsSection';
import DataAsServiceSection from './components/DataAsServiceSection';
import AngularSection from './components/AngularSection';
import Reactjs from './components/Reactjs';
import Vuejs from './components/Vuejs';
import MobileAppSection from './components/MobileAppSection';
import IOSSection from './components/IOSSection';
import AndroidSection from './components/AndroidSection';
import ReactNativeSection from './components/ReactNativeSection';
import HybridAppSection from './components/HybridAppSection';
import FlutterSection from './components/FlutterSection';
import IonicSection from './components/IonicSection';
import CodeigniterSection from './components/CodeigniterSection';
import MagentoSection from './components/MagentoSection';
import WooCommerceSection from './components/WooCommerceSection';
import ShopifySection from './components/ShopifySection';
import AIChatbotSection from './components/AIChatbotSection';
import Php from './components/Php';
import LaravelSection from './components/LaravelSection';
import SymfonySection from './components/SymfonySection';
import NodejsSection from './components/NodejsSection';
import CmsSection from './components/CmsSection';
import WordpressSection from './components/WordpressSection';
import DrupalSection from './components/DrupalSection';
import DedicatedTeamSection from './components/DedicatedTeamSection';
import CTOSection from './components/CTOSection';
import CMOSection from './components/CMOSection';
import AgenciesSection from './components/AgenciesSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* === Homepage === */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ITConsultingSection />
              <CoreServicesSection />
              <DigitalMarketingGrid />
              <QuerySection />
              <MarketingBenefitCard />
              <Test />
              <MilestoneSection />
            
             
            </>
          }
        />

        {/* === Other Sections === */}
        <Route path="/blockchain" element={<BlockchainSection />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/phpframework" element={<PHPSection />} />
        <Route path="/customui" element={<CustomUISection />} />
        <Route path="/custom-software" element={<CustomSoftwareSection />} /> {/* ✅ NEW ROUTE */}
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/healthcare" element={<HealthcareSection />} />
        <Route path="/retail" element={<RetailSection />} />
        <Route path="/infotech" element={<InfotechSection />} />
        <Route path="/logistics" element={<AutomotiveSection />} />
        <Route path="/aboutus" element={<AboutUsSection />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<NewsSection />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/casestudy" element={<CaseStudySection />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="/fullstackdevelopment" element={<FullStackSection />} />
        <Route path="/it" element={<ITSection />} />
        <Route path="/testing" element={<SoftwareTestingSection />} />
        <Route path="/digital" element={< DigitalMarketingSection />} />
        <Route path="/out" element={< OutsourcedProductSection />} />
        <Route path="/softi" element={< SoftwareDevItOpsSection />} />
        <Route path="/dataa" element={< DataAsServiceSection />} />
        <Route path="/angular" element={< AngularSection />} />
        <Route path="/react" element={< Reactjs />} />
        <Route path="/vue" element={< Vuejs />} />
        <Route path="/mobile" element={< MobileAppSection />} />
        <Route path="/ios" element={< IOSSection />} />
        <Route path="/android" element={< AndroidSection />} />
        <Route path="/native" element={< ReactNativeSection />} />
        <Route path="/hybrid" element={< HybridAppSection />} />
        <Route path="/flutter" element={< FlutterSection />} />
        <Route path="/ionic" element={< IonicSection />} />
        <Route path="/swift" element={< CodeigniterSection />} />
        <Route path="/mag" element={< MagentoSection />} />
        <Route path="/woo" element={< WooCommerceSection />} />    
        <Route path="/spo" element={< ShopifySection />} />
        <Route path="/aic" element={< AIChatbotSection />} />
        <Route path="/php" element={< Php />} />
        <Route path="/laravel" element={<LaravelSection />} />
        <Route path="/symfony" element={<SymfonySection />} />
        <Route path="/node" element={<NodejsSection />} />
        <Route path="/cms" element={<CmsSection />} />
        <Route path="/word" element={<WordpressSection />} />
        <Route path="/drupal" element={<DrupalSection />} />
        <Route path="/ddt" element={<DedicatedTeamSection />} />
        <Route path="/cto" element={<CTOSection />} />
         <Route path="/cmo" element={<CMOSection />} />
         <Route path="/agen" element={<AgenciesSection />} />
        


      </Routes>
      <FooterMegaMenu />
    </Router>
  );
}

export default App;
