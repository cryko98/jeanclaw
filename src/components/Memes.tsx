import meme1 from "@/assets/meme-trucks.png";
import meme2 from "@/assets/meme-towers.png";
import meme3 from "@/assets/meme-asparagus.png";
import meme4 from "@/assets/meme-clump.png";
import meme5 from "@/assets/meme-split.png";
import meme6 from "@/assets/meme-karate.png";
import meme7 from "@/assets/meme-poles.png";
import meme8 from "@/assets/meme-moon.png";

const Memes = () => {
  const memes = [
    { src: meme1, alt: "Epic truck split" },
    { src: meme2, alt: "Tower power" },
    { src: meme3, alt: "Asparagus warrior" },
    { src: meme4, alt: "Jean Clump message" },
    { src: meme5, alt: "Classic split pose" },
    { src: meme6, alt: "Martial arts master" },
    { src: meme7, alt: "Pole champion" },
    { src: meme8, alt: "Moon landing" },
  ];

  return (
    <section id="memes" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-foreground">
            LEGENDARY <span className="text-primary">MEMES</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            The greatest moments of Jean-Claw's journey 🥜
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memes.map((meme, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer bg-background"
              >
                <img
                  src={meme.src}
                  alt={meme.alt}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-bold text-lg px-4 text-center">
                    {meme.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memes;
