
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
