import { cn } from "@/lib/utils";

export interface IProps {
  label: string;
  className?: string;
}
const ScrollText = ({ label, className }: IProps) => {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="group-hover:-translate-y-full translate-0 transition-all duration-500">
        {label}
      </div>
      <div className="absolute translate-y-full group-hover:-translate-y-6 transition-all duration-300 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default ScrollText;
