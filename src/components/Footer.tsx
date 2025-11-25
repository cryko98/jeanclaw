import { Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a
              href="https://x.com/i/communities/1993346346728792504"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-2xl font-black text-foreground">
              JEAN-CLAW VAN DAMME
            </p>
            <p className="text-muted-foreground">
              Master of splits, champion of memes, legend of the blockchain 🥜
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>$JEANCLAW is a memecoin created for entertainment purposes.</p>
            <p className="mt-2">Always DYOR and invest responsibly.</p>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2025 Jean-Claw Van Damme. All splits reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
