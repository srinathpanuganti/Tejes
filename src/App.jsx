import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import BlogPostPage from "./pages/BlogPostPage";
import ScrollToTop from "./components/ScrollToTop";
import SmsPrivacyPolicyPage from "./pages/SmsPrivacyPolicyPage";
import TextMessagingTermsPage from "./pages/TextMessagingTermsPage";

function App() {
  return (
    <div className="App min-h-screen bg-slate-50">
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog-post/:id" element={<BlogPostPage />} />
          <Route path="/sms-privacy-policy" element={<SmsPrivacyPolicyPage />} />
          <Route path="/text-messaging-terms" element={<TextMessagingTermsPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
