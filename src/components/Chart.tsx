const Chart = () => {
  return (
    <section id="chart" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-foreground">
            LIVE <span className="text-primary">CHART</span>
          </h2>
          
          <div className="bg-background border-4 border-primary rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://dexscreener.com/solana/GWG68X7YztLGxVKrdebGnanRorF8VuLJHKVsuvckpump?embed=1&theme=dark"
                className="w-full h-full"
                title="DexScreener Chart"
              />
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-6">
            Track Jean-Claw's journey to the moon! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chart;
