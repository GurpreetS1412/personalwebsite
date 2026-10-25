import { BaseTile } from "../../ui/BaseTile";

interface AboutTileProps {
  title: string;
  content: string;
  image?: string;
}

export const AboutTile = ({ title, content, image }: AboutTileProps) => {
  return (
    <BaseTile>
      <div className="flex items-center gap-4">
        {image && (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold tracking-tight mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
        </div>
      </div>
    </BaseTile>
  );
};
