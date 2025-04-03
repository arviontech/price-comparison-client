import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
