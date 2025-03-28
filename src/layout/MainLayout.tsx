
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

const MainLayout = ({ children, showBreadcrumbs = true }: MainLayoutProps) => {
  const location = useLocation();
  
  // Generate breadcrumb items based on the current path
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    
    // Start with Home
    const items = [{ label: 'Home', path: '/' }];
    
    // Add path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Format the label (capitalize and replace hyphens with spaces)
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      items.push({
        label,
        path: isLast ? undefined : currentPath,
        isCurrent: isLast
      });
    });
    
    return items;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showBreadcrumbs && location.pathname !== '/' && (
        <div className="container mt-24 pt-4">
          <BreadcrumbNav items={getBreadcrumbItems()} />
        </div>
      )}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
