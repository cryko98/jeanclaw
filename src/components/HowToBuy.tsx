import { Wallet, ArrowRightLeft, Coins, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowToBuy = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Get a Wallet",
      description: "Download Phantom, Solflare, or any Solana wallet. Fund it with SOL from an exchange.",
    },
    {
      icon: ArrowRightLeft,
      title: "Go to a DEX",
      description: "Visit Raydium, Jupiter, or your preferred Solana DEX.",
    },
    {
      icon: Coins,
      title: "Swap SOL for JEAN-CLAW",
      description: "Paste the contract address and swap your SOL for $JEANCLAW tokens.",
    },
    {
      icon: Rocket,
      title: "HODL & Enjoy",
      description: "Welcome to the squad! Join the community and prepare for the moon! 🥜",
    },
  ];

  return (
    <section id="buy" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            HOW TO <span className="text-primary">BUY</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Join the Jean-Claw army in 4 simple steps
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary transition-colors">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/10 border-2 border-primary rounded-xl p-8 text-center">
            <p className="text-2xl font-bold text-foreground mb-2">
              Contract Address
            </p>
            <code className="text-sm md:text-base break-all text-foreground font-mono bg-background px-4 py-2 rounded">
              GWG68X7YztLGxVKrdebGnanRorF8VuLJHKVsuvckpump
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
