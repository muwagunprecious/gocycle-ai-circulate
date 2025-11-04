import { Shield, DollarSign, Cpu, Zap, Leaf, Sparkles } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified and Safe Transactions",
      description: "All buyers, recyclers, and collectors on GoCycle are KYC-verified and certified, ensuring safe, eco-friendly disposal."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Secure and Instant Payments",
      description: "Instant payouts after pickup confirmation with secure escrow protection."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Dynamic Pricing",
      description: "Real-time market data ensures fair pricing for all parties."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Instant Matching with Buyers",
      description: "AI matches sellers with nearby verified buyers and recyclers."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental and Carbon Credit Benefits",
      description: "Earn or claim carbon credits for verified recycling activities."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Convenient, End-to-End Experience",
      description: "From listing to payout, GoCycle handles it all securely."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Transact Your Old End-of-Life Batteries & Solar Panels on GoCycle?
          </h2>
          <p className="text-lg text-primary font-semibold">
            Turning Africa's e-waste into VALUE, IMPACT, and CARBON CREDITS leveraging AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
