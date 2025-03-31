
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Clock, Star, Users, BookOpen, ArrowRight, Filter, Search } from 'lucide-react';

const Courses = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 mb-4">
              Freelancer Education
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Courses for Freelance Success
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Enhance your skills with our curated courses designed specifically for freelancers.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 mb-12 -mt-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search for courses..."
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
                <Button>Search</Button>
              </div>
            </div>
          </div>

          {/* Course Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="h-auto py-3 justify-start gap-2 hover:bg-primary/5"
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Courses */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <Button variant="ghost" className="gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>

          {/* All Courses */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">All Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {allCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                <span>Load More Courses</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Freelance Journey?</h2>
            <p className="text-lg mb-8">
              Apply your new skills and join our community of successful freelancers.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Apply as a Freelancer
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Course Card Component
const CourseCard = ({ course }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <BookOpen className="h-16 w-16 text-white/70" />
        {course.level && (
          <span className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${
            course.level === 'Beginner' ? 'bg-green-500 text-white' :
            course.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
            'bg-blue-500 text-white'
          }`}>
            {course.level}
          </span>
        )}
      </div>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description.substring(0, 85)}...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" />
            <span>{course.modules} modules</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" fill={i < course.rating ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-sm">{course.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({course.reviews} reviews)</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center gap-1 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span>{course.students} students</span>
        </div>
        <Button size="sm">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

// Categories
const categories = [
  { name: 'Business', icon: <Users className="h-4 w-4" /> },
  { name: 'Design', icon: <Users className="h-4 w-4" /> },
  { name: 'Development', icon: <Users className="h-4 w-4" /> },
  { name: 'Marketing', icon: <Users className="h-4 w-4" /> },
  { name: 'Project Management', icon: <Users className="h-4 w-4" /> },
  { name: 'Soft Skills', icon: <Users className="h-4 w-4" /> },
];

// Featured Courses
const featuredCourses = [
  {
    title: 'Mastering Client Communication',
    description: 'Learn effective communication strategies to build strong client relationships and deliver outstanding results.',
    level: 'Beginner',
    duration: '6 hours',
    modules: 8,
    rating: 4.8,
    reviews: 156,
    students: 1240
  },
  {
    title: 'Freelance Business Management',
    description: 'Essential strategies for managing your freelance business, from finance to time management.',
    level: 'Intermediate',
    duration: '8 hours',
    modules: 10,
    rating: 4.9,
    reviews: 203,
    students: 1875
  },
  {
    title: 'Building Your Freelance Brand',
    description: 'Create a compelling personal brand to attract high-quality clients and stand out in the marketplace.',
    level: 'Beginner',
    duration: '5 hours',
    modules: 7,
    rating: 4.7,
    reviews: 118,
    students: 950
  }
];

// All Courses
const allCourses = [
  {
    title: 'Advanced React Development',
    description: 'Master modern React patterns including hooks, context API, and performance optimization techniques.',
    level: 'Advanced',
    duration: '12 hours',
    modules: 14,
    rating: 4.9,
    reviews: 210,
    students: 1560
  },
  {
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the core principles of creating user-centered designs that delight users and meet business goals.',
    level: 'Intermediate',
    duration: '10 hours',
    modules: 12,
    rating: 4.8,
    reviews: 175,
    students: 1320
  },
  {
    title: 'Writing Winning Proposals',
    description: 'Craft compelling project proposals that showcase your value and win more freelance contracts.',
    level: 'Beginner',
    duration: '4 hours',
    modules: 6,
    rating: 4.7,
    reviews: 142,
    students: 980
  },
  {
    title: 'Pricing Your Freelance Services',
    description: 'Develop effective pricing strategies that reflect your value and attract the right clients.',
    level: 'Intermediate',
    duration: '3 hours',
    modules: 5,
    rating: 4.9,
    reviews: 168,
    students: 1240
  },
  {
    title: 'Effective Time Management',
    description: 'Master productivity techniques specifically designed for the challenges of freelance work.',
    level: 'Beginner',
    duration: '4 hours',
    modules: 7,
    rating: 4.6,
    reviews: 126,
    students: 870
  },
  {
    title: 'Freelance Legal Essentials',
    description: 'Understand contracts, intellectual property, and other legal aspects of freelance business.',
    level: 'Intermediate',
    duration: '6 hours',
    modules: 8,
    rating: 4.8,
    reviews: 154,
    students: 905
  }
];

export default Courses;
