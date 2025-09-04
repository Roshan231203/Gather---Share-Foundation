import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const DonateButton = ({ children, className, ...props }) => {
  return (
    <Button 
      className={`bg-primary hover:bg-primary/90 text-black font-semibold flex items-center gap-2 ${className}`} 
      {...props}
    >
      <Heart size={18} />
      <span>{children || "Donate Now"}</span>
    </Button>
  );
};

export default DonateButton;