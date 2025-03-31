
import React from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TalentCard from './TalentCard';

interface TalentListProps {
  filteredTalent: any[];
  visibleTalent: number;
  formatName: (name: string) => string;
  onUnlockClick: () => void;
  onContactClick: () => void;
  handleLoadMore: () => void;
  isLoading: boolean;
}

const TalentList: React.FC<TalentListProps> = ({
  filteredTalent,
  visibleTalent,
  formatName,
  onUnlockClick,
  onContactClick,
  handleLoadMore,
  isLoading
}) => {
  if (filteredTalent.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 text-center">
        <p className="text-muted-foreground">No talent matches your current filters. Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filteredTalent.slice(0, visibleTalent).map((talent) => (
        <TalentCard 
          key={talent.id} 
          talent={talent} 
          formatName={formatName} 
          onUnlockClick={onUnlockClick} 
          onContactClick={onContactClick} 
        />
      ))}
      
      {visibleTalent < filteredTalent.length && (
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={handleLoadMore}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Loading...
              </>
            ) : (
              'Load More'
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TalentList;
