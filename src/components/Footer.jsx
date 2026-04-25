import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import logo from "../images/logo.png";
import {
  SmsPrivacyPolicyContent,
  TextMessagingTermsContent,
} from "./SmsPolicies";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  const modalLabel =
    activeModal === "privacy"
      ? "SMS Privacy Policy"
      : activeModal === "terms"
      ? "Text Messaging Terms and Conditions"
      : "";

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwN2NmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0iTTM2IDM0djEwaDEwVjM0SDM2ek0wIDIwaDIwVjBIMFYyMHptMjAgMjB2MTBoMTBWNDBIMjB6bTIwLTIwaDEwVjEwSDQwdjEwem0tMjAgMGgxMFYxMEgyMHYxMHptLTIwIDBoMTBWMTBIMHYxMHptNDAgMjBoMTBWNDBINDBWNjB6bTIwLTIwdjEwaC0xMFY0MGgxMHoiLz4KPC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      {/* Newsletter Section */}
      {/* <div className="relative border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📧 Stay Connected
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Get the Latest IT Insights
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for expert tips, industry trends, and exclusive updates on technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20 focus:border-cyan-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  <img src={logo} alt="" />
                </span>
              </div>
              <div>
                <span className="text-3xl font-bold">Tejes</span>
                <p className="text-cyan-400 text-sm">Complete IT Solutions</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Empowering businesses with innovative technology solutions that drive
              growth, enhance security, and streamline operations. Your trusted IT
              partner since 2003.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                  <MapPin size={16} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="text-slate-300">14980 Zuni St, Broomfield CO 80023</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-200">
                  <Mail size={16} className="text-cyan-400 group-hover:text-white" />
                </div>
                <a
                  href="mailto:info@tejes.com"
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  info@tejes.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-200">
                  <Phone size={16} className="text-emerald-400 group-hover:text-white" />
                </div>
                <a
                  href="tel:3005236659"
                  className="text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  +1 (303) 523-6659
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="mailto:info@tejes.com"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/tejes-services-inc"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "IT Support & Consulting",
                "Cybersecurity Solutions",
                "Cloud Infrastructure",
                "Strategic Consulting",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-cyan-400 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Tejes", path: "/about" },
                { name: "Latest News", path: "/blog" },
                { name: "Why Choose Us", path: "/about" },
                { name: "Contact Support", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-cyan-400 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center md:items-start pt-8 border-t border-white/10 space-y-4 md:space-y-0 md:gap-6">
          <div className="flex items-center text-slate-400 text-sm">
            <span>© 2025 Tejes. All rights reserved.</span>
          </div>
          <div className="w-full md:w-auto md:ml-auto flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => setActiveModal("privacy")}
              className="w-full sm:w-auto bg-cyan-500/20 border border-cyan-400 text-cyan-200 hover:bg-cyan-500/30 hover:text-white"
            >
              SMS Privacy Policy
            </Button>
            <Button
              onClick={() => setActiveModal("terms")}
              className="w-full sm:w-auto bg-cyan-500/20 border border-cyan-400 text-cyan-200 hover:bg-cyan-500/30 hover:text-white"
            >
              Text Messaging Terms and Conditions
            </Button>
          </div>
        </div>
      </div>

      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={modalLabel}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 p-6 md:p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            {activeModal === "privacy" ? (
              <SmsPrivacyPolicyContent />
            ) : (
              <TextMessagingTermsContent />
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
