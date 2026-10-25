import { BaseTile } from "../../ui/BaseTile";

interface SocialTileProps {
  title: string;
  value: string;
  link: string;
}

export const SocialTile = ({ title, value, link }: SocialTileProps) => {
  return (
    <BaseTile className="group cursor-pointer">
      <div className="flex flex-col h-full justify-between">
        <h3 className="text-lg font-medium opacity-60 group-hover:opacity-100 transition-opacity">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tighter">{value}</span>
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </BaseTile>
  );
};
