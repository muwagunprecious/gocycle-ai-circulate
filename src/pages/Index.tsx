import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { WaitlistForm } from "@/components/WaitlistForm";
import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <WaitlistForm />
      <EarlyAccess />
      <Footer />
    </main>
  );
};

export default Index;
