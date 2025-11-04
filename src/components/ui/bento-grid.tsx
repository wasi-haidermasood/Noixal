import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  features,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  features?: string[];
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-blue-950 border border-gray-800 hover:border-gray-700",
      "transform-gpu transition-all duration-300 hover:-translate-y-1",
      className,
    )}
  >
    {background && <div>{background}</div>}
    
    <div className="relative z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-2">
      <Icon className="h-10 w-10 text-white transition-all duration-300 ease-in-out group-hover:scale-110" />
      <h3 className="text-2xl font-bold text-white">
        {name}
      </h3>
      <p className="text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="mt-2 space-y-1.5">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center px-6 pb-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button 
        variant="ghost" 
        asChild 
        size="sm" 
        className="text-white hover:text-blue-400 hover:bg-white/5 -ml-3"
      >
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
  </div>
);

export { BentoCard, BentoGrid };