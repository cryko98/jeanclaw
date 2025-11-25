import memeTrucks from "@/assets/meme-trucks.png";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-foreground">
            ABOUT <span className="text-primary">JEAN-CLAW</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                In the deep forests where legends are born, a squirrel emerged who would defy all expectations. 
                Jean-Claw Van Damme, master of the legendary split, martial arts champion, and crypto warrior.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                From doing splits between trucks on mountain highways to conquering the towers of Wall Street, 
                from mastering ancient martial arts to landing on the moon itself - Jean-Claw represents the 
                ultimate combination of strength, flexibility, and determination.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Now, Jean-Claw brings his legendary spirit to the Solana blockchain. This isn't just another 
                memecoin - it's a movement of warriors, dreamers, and believers who know that with enough nuts 
                and determination, anything is possible. 🥜
              </p>

              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-xl font-bold text-primary mb-2">
                  "The only limit is the one you set yourself."
                </p>
                <p className="text-sm text-muted-foreground">- Jean-Claw Van Damme</p>
              </div>
            </div>

            <div className="relative">
              <img
                src={memeTrucks}
                alt="Jean-Claw doing epic splits"
                className="rounded-xl shadow-2xl border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
