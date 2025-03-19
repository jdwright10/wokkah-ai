
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Iyanu Odebode",
      role: "CEO/Chief Data Scientist",
      bio: "Dr. Odebode has over 15 years of experience in AI and software development. As CEO, he shapes the vision and strategic direction of Wokkah.",
      image: "/lovable-uploads/0fa5210f-4aad-46b5-8dd7-a87df694fe24.png",
      linkedin: "#",
      twitter: "#",
      website: "#"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Sarah oversees all technical aspects of Wokkah's platform, from architecture to implementation, ensuring scalability, security, and innovation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head of AI Research",
      bio: "Michael leads our AI research team, developing cutting-edge algorithms that power our product requirement document generation and talent matching systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Director of Product",
      bio: "Priya shapes our product vision, leading the development of features that solve our customers' most pressing challenges in project management.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#"
    },
    {
      id: 5,
      name: "James Wilson",
      role: "VP of Engineering",
      bio: "James oversees our engineering teams, ensuring the seamless delivery of new features and maintaining the reliability of our platform.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 6,
      name: "Elena Rodriguez",
      role: "Head of Customer Success",
      bio: "Elena ensures our customers achieve their goals with Wokkah, leading a team dedicated to providing exceptional support and training.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <MainLayout>
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the People Behind Wokkah
            </h1>
            <p className="text-lg text-muted-foreground">
              Our diverse team of experts brings together experience from technology, business, and academia to build the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-neutral-500 hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} className="text-neutral-500 hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.website && (
                      <a href={member.website} className="text-neutral-500 hover:text-primary transition-colors">
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for passionate, talented individuals to help us build the future of work. Check out our open positions.
            </p>
            <Link to="/careers" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Team;
