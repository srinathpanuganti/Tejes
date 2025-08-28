import React, { useEffect, useRef } from "react";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import ServiceCard from "../components/ServiceCard";
import { mockData } from "../data/mockData";

const AboutPage = () => {
  const headerRef = useRef(null);
  const companyRef = useRef(null);
  const workflowRef = useRef(null);
  const teamRef = useRef(null);

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
    if (companyRef.current) observer.observe(companyRef.current);
    if (workflowRef.current) observer.observe(workflowRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind TEJES and our commitment to delivering exceptional IT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section ref={companyRef} className="py-20 bg-white opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Business team collaboration" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                TEJES is a complete solution for your business
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {mockData.company.description}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {mockData.company.vision}
              </p>
              
              <div className="space-y-4">
                {[
                  "Years of experience in IT solutions",
                  "Cutting-edge technology implementations", 
                  "Comprehensive business support",
                  "Scalable solutions for any business size"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 w-6 h-6" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  {mockData.company.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading provider of innovative IT solutions that empower businesses to thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Our Values</h3>
                <p className="text-slate-600 leading-relaxed">
                  Excellence, integrity, innovation, and customer-centricity drive everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Overview Section */}
      <section ref={workflowRef} className="py-20 bg-white opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Work Overview
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our structured approach ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.slice(0, 5).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-slate-50 opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About TEJES & Software
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Whenever you need us, we are here to provide support you. You support the whole Office 
                are sales and also provide the vital safety for your employees, every IT team, and all types of 
                technology needs and keep them productive, we offer support to the Office apps including 
                programs and customer service solutions, any organization cloud services or desktop officing
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Services ensures that your teams gets the assistance they require to take care of any 
                technical issues and keep them productive, we offer support to the Office apps including 
                administration processes, both as a result situation, ongoing culture promoting tool will 
                ensure that you are capable of generating no bottleneck, regardless of your organization or 
                we build the best customization.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={mockData.company.team[0].image}
                alt="Team member" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;