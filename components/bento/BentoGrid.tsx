import { motion } from "framer-motion";
import { BaseTile } from "../ui/BaseTile";
import { cn } from "../../lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-4 grid-auto-rows-[180px] gap-6 p-4 md:p-8",
      className
    )}>
      {children}
    </div>
  );
};

export const BentoTile = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  className
}: {
  children: React.ReactNode,
  colSpan?: number,
  rowSpan?: number,
  className?: string
}) => {
  return (
    <div
      className={cn(
        `col-span-1 md:col-span-${colSpan} row-span-${rowSpan}`,
        className
      )}
    >
      <BaseTile>
        {children}
      </BaseTile>
    </div>
  );
};
