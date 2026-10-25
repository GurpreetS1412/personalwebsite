import { BaseTile } from "../../ui/BaseTile";

interface TechTileProps {
  title: string;
  tags: string[];
}

export const TechTile = ({ title, tags }: TechTileProps) => {
  return (
    <BaseTile>
      <div className="flex flex-col h-full justify-between">
        <h3 className="text-lg font-medium opacity-60 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <div key={tag} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </BaseTile>
  );
};
