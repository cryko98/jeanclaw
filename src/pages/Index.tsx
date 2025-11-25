import Navigation from "@/components/Navigation";
import FloatingPeanuts from "@/components/FloatingPeanuts";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Chart from "@/components/Chart";
import HowToBuy from "@/components/HowToBuy";
import Memes from "@/components/Memes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <FloatingPeanuts />
      <Hero />
      <About />
      <Chart />
      <HowToBuy />
      <Memes />
      <Footer />
    </div>
  );
};

export default Index;
