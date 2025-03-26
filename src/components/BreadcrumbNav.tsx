
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbItem {
  label: string;
  path?: string;
  isCurrent?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNav = ({ items, className = '' }: BreadcrumbNavProps) => {
  return (
    <Breadcrumb className={`bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm ${className}`}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage className="font-medium text-purple-700">{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.path || '#'} className="text-gray-600 hover:text-blue-600 transition-colors">{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator className="text-purple-300" />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
