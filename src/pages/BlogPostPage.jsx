import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { mockData } from "../data/mockData";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Blog post content data
  const blogContent = {
    1: {
      content: `In today's digital-first world, cybersecurity is no longer optional—it's a necessity. With cyber threats like phishing, ransomware, and data breaches on the rise, businesses must take proactive steps to protect their data and systems. Here are some essential cybersecurity practices every business should follow:

## 1. Use Strong Password Policies

Weak or reused passwords are one of the easiest ways for hackers to gain access. Encourage employees to create strong, unique passwords and implement multi-factor authentication (MFA) wherever possible.

## 2. Keep Software Updated

Outdated software often has security vulnerabilities that attackers exploit. Regular updates and patch management ensure your systems are protected against known threats.

## 3. Train Employees on Cyber Awareness

Human error is one of the leading causes of cyber incidents. Conduct regular cybersecurity training so employees can recognize phishing attempts, suspicious links, and social engineering attacks.

## 4. Implement Data Encryption

Encrypt sensitive data both in transit and at rest. This ensures that even if data is intercepted, it remains unreadable without the proper decryption key.

## 5. Regularly Back Up Data

Frequent backups protect your business from data loss due to ransomware, system crashes, or accidental deletion. Store backups securely, preferably offsite or in the cloud.

💡 **Key Takeaway**: By following these best practices, businesses can significantly reduce their risk of cyberattacks and safeguard their digital assets.`
    },
    2: {
      content: `Cloud storage has revolutionized the way businesses store and access data. Whether you're a startup or a large enterprise, choosing the right cloud storage provider is critical for efficiency, security, and scalability.

Here are some key factors to consider when selecting a cloud storage solution:

## 1. Storage Capacity & Scalability

Ensure the solution offers enough storage for your current needs while allowing easy scaling as your data grows. Cloud providers typically allow businesses to pay only for what they use.

## 2. Security Features

Look for end-to-end encryption, data redundancy, and compliance certifications (such as ISO 27001 or GDPR compliance) to protect sensitive information.

## 3. Accessibility & Collaboration

A good cloud storage solution should allow secure access from anywhere, on any device. Features like real-time collaboration and file sharing can improve team productivity.

## 4. Cost & Pricing Models

Compare pricing structures—some providers charge per user, while others charge based on storage size. Choose a plan that fits your business needs without unnecessary costs.

## 5. Integration with Existing Tools

Ensure the solution integrates with your existing software (CRM, project management tools, office apps) for smooth workflows.

Popular providers like Google Drive, Microsoft OneDrive, Dropbox, and AWS S3 each have unique strengths. The right choice depends on your business size, security requirements, and budget.

💡 **Key Takeaway**: Investing in the right cloud storage ensures secure, reliable, and accessible data management for your business.`
    },
    3: {
      content: `Strong IT operations form the backbone of any successful business. From ensuring system reliability to streamlining workflows, IT practices keep organizations running smoothly.

Here are some standard IT operations every business should implement:

## 1. Routine System Monitoring

Regular monitoring of servers, networks, and applications ensures potential issues are detected early—before they cause downtime.

## 2. Data Backup and Disaster Recovery

Implement automated backups and a disaster recovery plan. This helps your business stay operational even in the event of hardware failure, cyberattacks, or natural disasters.

## 3. User Access Management

Set clear policies for user access levels. Not every employee needs access to sensitive systems or data—restrict access based on roles to minimize risk.

## 4. Regular Maintenance & Updates

From hardware upgrades to software patches, maintaining your IT environment reduces downtime and security vulnerabilities.

## 5. Help Desk and Support Systems

An efficient IT help desk ensures employees get quick solutions to technical issues, boosting productivity and minimizing disruptions.

## 6. Documentation & Standard Operating Procedures (SOPs)

Document IT policies, troubleshooting steps, and workflows. This ensures consistency, even if staff members change.

💡 **Key Takeaway**: Implementing these standard IT operations creates a stable, secure, and efficient technology environment that supports business growth.`
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the blog post by ID
    const foundPost = mockData.blogPosts.find(post => post.id === parseInt(id));
    
    if (foundPost) {
      // Add the content to the post
      const postWithContent = {
        ...foundPost,
        content: blogContent[parseInt(id)]?.content || "Content not available for this post."
      };
      setPost(postWithContent);
    }
    
    setLoading(false);
  }, [id]);

  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle headers
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      // Handle key takeaway section
      if (paragraph.includes('💡 **Key Takeaway**:')) {
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-700">💡 Key Takeaway: </span>
              {paragraph.replace('💡 **Key Takeaway**: ', '')}
            </p>
          </div>
        );
      }
      
      // Handle regular paragraphs
      return (
        <p key={index} className="text-slate-700 leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-slate-600 mt-4">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">Post Not Found</h1>
          <p className="text-slate-600">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative mt-8 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwN2NmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMyIvPgo8Y2lyY2xlIGN4PSIyMyIgY3k9IjMiIHI9IjMiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 pt-32 pb-16 relative">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => navigate('/blog')}
              className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            
            <div className="space-y-6">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>TEJES Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-16 mb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              {/* Article Content */}
              <article className="lg:w-3/4">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  {/* Article Excerpt */}
                  <div className="mb-8 p-6 bg-slate-50 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-slate-700 leading-relaxed italic">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Article Body */}
                  <div className="prose prose-lg max-w-none">
                    {formatContent(post.content)}
                  </div>
                  
                  {/* Article Footer */}
                  {/* <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-slate-600 hover:text-blue-600"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-slate-600 hover:text-blue-600"
                        >
                          <Bookmark className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                      </div>
                      
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {post.category}
                      </Badge>
                    </div>
                  </div> */}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-1/4 mt-12 lg:mt-0">
                <div className="sticky top-24 space-y-8">
                  {/* Related Posts */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Related Posts</h3>
                    <div className="space-y-4">
                      {mockData.blogPosts
                        .filter(relatedPost => relatedPost.id !== parseInt(id))
                        .slice(0, 3)
                        .map((relatedPost) => (
                          <div 
                            key={relatedPost.id}
                            className="group cursor-pointer border-b border-slate-100 pb-4 last:border-b-0"
                            onClick={() => navigate(`/blog-post/${relatedPost.id}`)}
                          >
                            <div className="flex space-x-3">
                              <img 
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                                <p className="text-xs text-slate-500 mt-1">
                                  {relatedPost.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Categories</h3>
                    <div className="space-y-2">
                      {[...new Set(mockData.blogPosts.map(post => post.category))].map((category) => (
                        <Badge 
                          key={category}
                          className="bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200 mr-2 mb-2"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;