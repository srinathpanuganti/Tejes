import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Shield, Cloud, Users, Cpu, CheckCircle, Headphones, X, Star, Clock, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { mockData } from "../data/mockData";
import { Link } from "react-router-dom";

const HomePage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);

  const services = {
    'it-support': {
      title: 'IT Support & Consulting',
      icon: Headphones,
      color: 'blue',
      description: 'Comprehensive technical support and strategic IT consulting to optimize your business operations.',
      fullContent: {
        overview: 'Our comprehensive IT support services ensure your business technology runs smoothly 24/7. From helpdesk support to strategic consulting, we provide end-to-end solutions tailored to your needs.',
        features: [
          '24/7 Help Desk Support',
          'Remote & On-site Technical Support',
          'System Monitoring & Maintenance',
          'Software Installation & Updates',
          'Network Infrastructure Management'
        ],
        benefits: [
          'Reduced downtime and increased productivity',
          'Cost-effective IT management',
          'Expert guidance on technology decisions',
          'Proactive problem resolution'
        ],
        pricing: 'Starting from $99/month per user',
        response: '< 2 hours average response time'
      }
    },
    'cybersecurity': {
      title: 'Cybersecurity Solutions',
      icon: Shield,
      color: 'emerald',
      description: 'Advanced security measures to protect your business from evolving cyber threats.',
      fullContent: {
        overview: 'Protect your business with our comprehensive cybersecurity solutions. We implement multi-layered security strategies to safeguard your data, systems, and operations from cyber threats.',
        features: [
          'Advanced Threat Detection',
          'Firewall & Network Security',
          'Employee Security Training',
          'Vulnerability Assessments',
          'Incident Response Planning',
        ],
        benefits: [
          'Protection against data breaches',
          'Regulatory compliance assurance',
          'Enhanced customer trust',
          'Business continuity protection'
        ],
        pricing: 'Custom pricing based on assessment',
        response: 'Free security audit included'
      }
    },
    'virtual-cio': {
      title: 'Virtual CIO Services',
      icon: Users,
      color: 'indigo',
      description: 'Expert guidance to align your technology investments with business objectives.',
      fullContent: {
        overview: 'Get C-level technology leadership without the full-time cost. Our Virtual CIO services provide strategic IT guidance to drive your business forward.',
        features: [
          'Strategic IT Planning',
          'Technology Roadmap Development',
          'Budget Planning & Optimization',
          'Risk Assessment & Mitigation',
          'Digital Transformation Strategy'
        ],
        benefits: [
          'Expert leadership at fractional cost',
          'Improved technology ROI',
          'Strategic competitive advantage',
          'Streamlined IT operations'
        ],
        pricing: 'Starting from $2,500/month',
        response: 'Quarterly strategic reviews included'
      }
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'cyan',
      description: 'Scalable cloud solutions designed for modern businesses seeking flexibility and growth.',
      fullContent: {
        overview: 'Transform your IT infrastructure with our cloud solutions. We help businesses migrate, optimize, and manage their cloud environments for maximum efficiency and cost savings.',
        features: [
          'Cloud Migration Planning',
          'Multi-Cloud Management',
          'Backup & Disaster Recovery',
          'Performance Optimization',
          'Cost Management & Monitoring'
        ],
        benefits: [
          'Reduced infrastructure costs',
          'Enhanced scalability & flexibility',
          'Improved disaster recovery',
          'Global accessibility'
        ],
        pricing: 'Pay-as-you-scale model',
        response: 'Free migration assessment'
      }
    },
    'strategic-consulting': {
      title: 'Strategic Consulting',
      icon: Users,
      color: 'purple',
      description: 'Expert guidance to align your technology investments with business objectives.',
      fullContent: {
        overview: 'Our strategic consulting services help organizations make informed technology decisions that drive business growth and operational efficiency.',
        features: [
          'Digital Transformation Planning',
          'Process Optimization',
          'Technology Assessment',
          'ROI Analysis & Reporting',
          'Industry Best Practices'
        ],
        benefits: [
          'Improved operational efficiency',
          'Better technology alignment',
          'Reduced implementation risks',
          'Accelerated digital transformation'
        ],
        pricing: 'Project-based pricing available',
        response: 'Complimentary consultation'
      }
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-100',
        accent: 'bg-blue-50'
      },
      emerald: {
        bg: 'from-emerald-500 to-emerald-600',
        text: 'text-emerald-600',
        border: 'border-emerald-100',
        accent: 'bg-emerald-50'
      },
      indigo: {
        bg: 'from-indigo-500 to-indigo-600',
        text: 'text-indigo-600',
        border: 'border-indigo-100',
        accent: 'bg-indigo-50'
      },
      cyan: {
        bg: 'from-cyan-500 to-cyan-600',
        text: 'text-cyan-600',
        border: 'border-cyan-100',
        accent: 'bg-cyan-50'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-100',
        accent: 'bg-purple-50'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const PopupModal = ({ serviceKey, service }) => {
    if (activePopup !== serviceKey) return null;
    
    const colors = getColorClasses(service.color);
    const Icon = service.icon;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
        <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl mx-2 sm:mx-0">
          {/* Header */}
          <div className={`relative p-4 sm:p-6 md:p-8 bg-gradient-to-br ${colors.bg} text-white rounded-t-2xl sm:rounded-t-3xl`}>
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pr-8 sm:pr-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{service.title}</h2>
                <p className="text-white text-opacity-90 text-sm sm:text-base md:text-lg">
                  Professional solutions tailored to your needs
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {/* Overview */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Overview</h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {service.fullContent.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {/* Features */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 flex items-center">
                  <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text} mr-2`} />
                  Key Features
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {service.fullContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 flex items-center">
                  <Award className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text} mr-2`} />
                  Benefits
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {service.fullContent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-700 text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 text-center">
              <Link to={"/contact"}>
              <button 
                className={`bg-gradient-to-r ${colors.bg} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto`}
              >
                Get Started Today
              </button>
              </Link>
              <p className="text-slate-500 mt-2 sm:mt-3 text-xs sm:text-sm">Contact us for a free consultation</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-15 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwN2NmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNwYXRoIGQ9Ik0zNiAzNHYxMGgxMFYzNEgzNnpNMCAyMGgyMFYwSDBWMjB6bTIwIDIwdjEwaDE2VjQwSDIwem0yMC0yMGgxMFYxMEg0MHYxMHptLTIwIDBoMTBWMTBIMjB2MTB6bS0yMCAwaDEwVjEwSDB2MTB6bTQwIDIwaDE6VjQwSDQwVjYwem0yMC0yMHYxMGgtMTBWNDBINDBWNjB6Ii8+PC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef} className="space-y-8 opacity-0 transform translate-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Make a Difference for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Your Business
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                With our years of experience in designing, providing, and implementing full range of 
                business technology solutions, we stay abreast of assisting our clients in staying 
                updated on all of the latest and cutting-edge IT technologies and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={"/contact"}>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
                </Link>
                <Link to={"/services"}>
                <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 px-8 py-4 text-lg rounded-lg transition-all duration-300">
                  Learn More
                </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4 p-8">
                {[Shield, Cloud, Users, Cpu].map((Icon, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-white">
                        {["Security", "Cloud", "Support", "Technology"][index]}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-10 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Comprehensive IT Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Tailored for Success
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and expert support
            </p>
          </div>

          {/* Featured Service */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0zNiAzNHYxMGgxMFYzNEgzNnpNMCAyMGgyMFYwSDBWMjB6bTIwIDIwdjEwaC0xMFY0MGgxMHptMjAtMjBoMTBWMTBINDBWMjB6bS0yMCAwaDEwVjEwSDIwVjIwem0tMjAgMGgxMFYxMEgwVjIwem00MCAyMGgxMFY0MEg0MFY2MHptMjAtMjB2MTBoMTBWNDBINDBWNjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <span className="text-cyan-200 font-semibold">Premium Service</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Complete IT Infrastructure Management
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    From network security to cloud solutions, we provide end-to-end IT services 
                    that scale with your business growth and ensure maximum operational efficiency.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">24/7 Support</span>
                    <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">Expert Team</span>
                    <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">Scalable Solutions</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="font-semibold">Security First</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">☁️</div>
                      <div className="font-semibold">Cloud Ready</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="font-semibold">24/7 Support</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="font-semibold">Fast Deploy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories - Made more mobile friendly */}
           <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12">
            {/* IT Support & Consulting */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">IT Support & Consulting</h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Comprehensive technical support and strategic IT consulting to optimize your business operations.
                  </p>
                  <div 
                    className="flex items-center text-blue-600 font-semibold group cursor-pointer"
                    onClick={() => setActivePopup('it-support')}
                  >
                    <span className="group-hover:mr-2 transition-all duration-200 text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cybersecurity Solutions */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">Cybersecurity Solutions</h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Advanced security measures to protect your business from evolving cyber threats.
                  </p>
                  <div 
                    className="flex items-center text-emerald-600 font-semibold group cursor-pointer"
                    onClick={() => setActivePopup('cybersecurity')}
                  >
                    <span className="group-hover:mr-2 transition-all duration-200 text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual CIO Services */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">Virtual CIO Services</h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Expert guidance to align your technology investments with business objectives.
                  </p>
                  <div 
                    className="flex items-center text-indigo-600 font-semibold group cursor-pointer"
                    onClick={() => setActivePopup('virtual-cio')}
                  >
                    <span className="group-hover:mr-2 transition-all duration-200 text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">Cloud Infrastructure</h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Scalable cloud solutions designed for modern businesses seeking flexibility and growth.
                  </p>
                  <div 
                    className="flex items-center text-cyan-600 font-semibold group cursor-pointer"
                    onClick={() => setActivePopup('cloud-infrastructure')}
                  >
                    <span className="group-hover:mr-2 transition-all duration-200 text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Consulting */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">Strategic Consulting</h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    Expert guidance to align your technology investments with business objectives.
                  </p>
                  <div 
                    className="flex items-center text-purple-600 font-semibold group cursor-pointer"
                    onClick={() => setActivePopup('strategic-consulting')}
                  >
                    <span className="group-hover:mr-2 transition-all duration-200 text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm md:text-base">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 mb-1 sm:mb-2">99.9%</div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm md:text-base">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">10+</div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm md:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                TEJES is a complete solution for your business
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                With our years of experience in designing, providing, and implementing full range of 
                business technology solutions, we stay abreast of assisting our clients in staying updated.
              </p>
              <div className="space-y-4">
                {[
                  "Expert technical support 24/7",
                  "Cutting-edge security solutions", 
                  "Scalable cloud infrastructure",
                  "Comprehensive IT consulting"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center" 
                alt="Business team collaboration" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-slate-50 opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with TEJES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how TEJES can help accelerate your digital transformation journey
          </p>
          <Link to={"/contact"}>
          <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us Today
          </Button>
          </Link>
        </div>
      </section>

      {/* Service Popups */}
      {Object.entries(services).map(([key, service]) => (
        <PopupModal key={key} serviceKey={key} service={service} />
      ))}
    </div>
  );
};

export default HomePage;