import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ewaste.jpg";

export const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="E-waste transformation to sustainable future" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white">
            COMING SOON
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-white/90">
            Turn Your Old Batteries Into Value and Environmental Impact
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join Africa's first AI-powered e-waste marketplace where verified buyers meet real sellers. 
            Trade safely, get the best dynamic prices, and help build a cleaner, greener future.
          </p>

          {/* Stat Highlight */}
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-scale-in">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="text-3xl font-bold text-white">50 Tons</p>
              <p className="text-sm text-white/70">E-waste Diverted</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToWaitlist}
            size="lg"
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-hover transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
