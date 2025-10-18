import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/+85511926262?text=Bonjour, je souhaite obtenir des informations sur vos tours au Cambodge", "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={cn(
          "fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
      >

        {/* Main Button */}
        <Button
          variant="whatsapp"
          size="lg"
          onClick={openWhatsApp}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group relative overflow-hidden"
        >
          <MessageCircle size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:animate-bounce" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          
          {/* Notification Badge */}
          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] sm:text-xs font-bold">1</span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;