import { Button } from "@/components/ui/button";
import { Copy, Twitter } from "lucide-react";
import { toast } from "sonner";
import memeHero from "@/assets/meme-towers.png";

const Hero = () => {
  const contractAddress = "GWG68X7YztLGxVKrdebGnanRorF8VuLJHKVsuvckpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast.success("Contract address copied!");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="mb-8">
            <img
              src={memeHero}
              alt="Jean-Claw Van Damme"
              className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-primary shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tight">
            JEAN-CLAW
            <br />
            <span className="text-primary">VAN DAMME</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The most legendary squirrel in crypto. Master of splits, martial arts, and moon missions! 🥜
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={copyToClipboard}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg"
            >
              <Copy className="mr-2 h-5 w-5" />
              Copy CA
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-bold text-lg border-2"
            >
              <a
                href="https://x.com/i/communities/1993346346728792504"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Join Community
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-bold text-lg border-2"
            >
              <a href="#buy">
                Buy Now
              </a>
            </Button>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-2">Contract Address</p>
            <code className="text-xs md:text-sm break-all text-foreground font-mono">
              {contractAddress}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
