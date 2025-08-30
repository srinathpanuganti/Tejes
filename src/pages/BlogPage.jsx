import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { mockData } from "../data/mockData";

const BlogPage = () => {
  const headerRef = useRef(null);
  const blogsRef = useRef(null);
  const navigate = useNavigate();

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
    if (blogsRef.current) observer.observe(blogsRef.current);

    return () => observer.disconnect();
  }, []);

  const handleBlogClick = (postId) => {
    navigate(`/blog-post/${postId}`);
  };

  const BlogCard = ({ id, title, category, image, excerpt, date }) => (
    <Card 
      className="group bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer"
      onClick={() => handleBlogClick(id)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Button 
          className="absolute bottom-4 left-4 bg-white text-blue-600 hover:bg-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleBlogClick(id);
          }}
        >
          Read More
        </Button>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-slate-600 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span>TEJES Team</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwN2NmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPHBhdGggZD0iTTM2IDM0djEwaDEwVjM0SDM2ek0wIDIwaDIwVjBIMFYyMHptMjAgMjB2MTBoMTBWNDBIMjB6bTIwLTIwaDEwVjEwSDQwdjEwem0tMjAgMGgxMFYxMEgyMHYxMHptLTIwIDBoMTBWMTBIMHYxMHptNDAgMjBoMTBWNDBINDBWNjB6bTIwLTIwdjEwaC0xMFY0MGgxMHoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-20 relative">
          <div ref={headerRef} className="text-center space-y-6 opacity-0 transform translate-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">News</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, insights, and best practices in technology and IT solutions
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={blogsRef} className="py-20 opacity-0 transform translate-y-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;