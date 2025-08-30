import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-slate-800">Blog Post {id}</h1>
        <p className="text-slate-600 mt-4">This is your blog post content for post {id}...</p>
      </div>
    </div>
  );
};

export default BlogPostPage;