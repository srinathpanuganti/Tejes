import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { mockData } from "../data/mockData";

const ServicesPage = () => {
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const detailsRef = useRef(null);

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

    if (headerRef.current) observer.observe(headerRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (detailsRef.current) observer.observe(detailsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwN2NmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0iTTM2IDM0djEwaDEwVjM0SDM2ek0wIDIwaDIwVjBIMFYyMHptMjAgMjB2MTBoMTBWNDBIMjB6bTIwLTIwaDEwVjEwSDQwdjEwem0tMjAgMGgxMFYxMEgyMHYxMHptLTIwIDBoMTBWMTBIMHYxMHptNDAgMjBoMTBWNDBINDBWNjB6bTIwLTIwdjEwaC0xMFY0MGgxMHoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative">
          <div ref={headerRef} className="text-center space-y-6 opacity-0 transform translate-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* What is TEJES Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                What Is TEJES
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                With our years of experience in designing, providing, and implementing full range of 
                business technology solutions, we stay abreast of assisting our clients in staying updated on all of 
                the latest and cutting-edge IT technologies and solutions, regardless of how small or how 
                large their businesses are. We are beginning delivering the very best of IT innovations and 
                solutions rapidly and progressively. We offer solutions and consultancy services for any business needs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are capable of doing so, we have been doing this for a long time now, and we have no 
                doubt as to our capabilities. Team service will take care of your IT, providing enough time for 
                you to focus on the other important aspects of what makes your business special.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" 
                alt="IT professionals at work" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="py-20 bg-slate-50 opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Best Services We Provide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Keep moving forward with world-class technical support that goes 
              above and beyond to resolve issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section ref={detailsRef} className="py-20 bg-white opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* IT Support */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800">IT Support</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  IT Support keeps up with the PC organizations of a wide range of size and constructions. 
                  We give client PC support, as well as concentrating the online organization issues along as expected.
                </p>
                <ul className="space-y-3">
                  {[
                    "24/7 technical support coverage",
                    "Remote and on-site assistance", 
                    "Hardware and software troubleshooting",
                    "Network maintenance and optimization"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=350&fit=crop" 
                  alt="IT Support" 
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Network Security */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=350&fit=crop" 
                  alt="Network Security" 
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-slate-800">Network Security</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A Network Security set of firewall is composed to help control who organizations and the guests, 
                  Here we'll framework what network security implies, why your business requires security best practices.
                </p>
                <ul className="space-y-3">
                  {[
                    "Advanced firewall configuration",
                    "Intrusion detection and prevention",
                    "Security audits and compliance",
                    "Threat monitoring and response"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cloud Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800">Cloud Solutions</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Cloud-based solutions for your clients and organizations incorporate upgraded usefulness and 
                  decreased support and cost for PC foundation or in-house processing.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cloud migration strategies",
                    "Scalable infrastructure design",
                    "Data backup and recovery",
                    "Cost optimization consulting"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=350&fit=crop" 
                  alt="Cloud Solutions" 
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;