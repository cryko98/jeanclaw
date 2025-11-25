import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Jean-Claw Van Damme" className="w-12 h-12 rounded-full border-2 border-primary" />
            <span className="font-black text-xl text-foreground hidden sm:block">
              JEAN-CLAW
            </span>
          </button>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="font-bold"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("chart")}
              className="font-bold"
            >
              Chart
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("buy")}
              className="font-bold"
            >
              How to Buy
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("memes")}
              className="font-bold"
            >
              Memes
            </Button>
            <Button
              onClick={() => scrollToSection("buy")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold hidden sm:flex"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
