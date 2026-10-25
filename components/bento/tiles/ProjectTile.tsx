import { BaseTile } from "../../ui/BaseTile";
import { cn } from "../../../lib/utils";

interface ProjectTileProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const ProjectTile = ({ title, description, tags, link }: ProjectTileProps) => {
  return (
    <BaseTile className="group cursor-pointer">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><polyline points="15 3 21 3 21 9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </BaseTile>
  );
};
