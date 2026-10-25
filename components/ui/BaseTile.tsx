import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface BaseTileProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const BaseTile = ({ children, className, ...props }: BaseTileProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        translateY: -5,
        transition: { type: "spring", stiffness: 400, damping: 30 }
      }}
      className={cn(
        "bento-tile glass p-6 h-full w-full flex flex-col justify-between",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
