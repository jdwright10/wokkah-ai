
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { Helmet } from 'react-helmet';

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Product Requirement Documents",
      excerpt: "Discover how artificial intelligence is transforming the way teams create and manage product requirement documents, leading to more efficient development cycles and better outcomes.",
      date: "January 15, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "5 Project Management Trends to Watch in 2025",
      excerpt: "The landscape of project management is constantly evolving. Learn about the top five trends that are shaping how teams collaborate, communicate, and deliver successful projects.",
      date: "February 22, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Building the Perfect Talent Matching Algorithm: Challenges and Solutions",
      excerpt: "Matching the right talent to the right project is both an art and a science. Explore the complexities of building effective talent matching algorithms and how AI is helping overcome these challenges.",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Remote Work and the Future of Project Collaboration",
      excerpt: "As remote work becomes the norm, project collaboration tools and methodologies need to adapt. Find out how leading companies are reimagining collaboration in a distributed world.",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The Role of AI in Bridging the Tech Talent Gap",
      excerpt: "With demand for tech talent outpacing supply, companies are turning to AI to help identify, develop, and retain skilled professionals. Learn how artificial intelligence is helping close the talent gap.",
      date: "May 18, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "9 min read"
    }
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>Wokkah Blog | Insights on AI, Project Management & Tech Talent</title>
        <meta name="description" content="Explore our collection of articles, insights, and thoughts on AI, project management, talent matching, and the future of work." />
        <meta name="keywords" content="AI blog, project management, talent matching, software development, tech industry trends" />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of articles, insights, and thoughts on AI, project management, 
              talent matching, and the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>Dr. Iyanu Odebode</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-primary font-medium flex items-center hover:underline"
                    >
                      Read more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
