
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchAndFilterProps {
  onSearch?: () => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onSearch }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 mb-12">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search by skill, expertise, or role..."
            className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button onClick={onSearch}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
