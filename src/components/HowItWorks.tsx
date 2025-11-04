import { ListPlus, Users, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <ListPlus className="w-12 h-12" />,
      title: "List Your Batteries / Panels",
      description: "In two easy steps, list your old car, inverter, and solar batteries or panels by size, location, and units. Get instant AI-powered price proposals or enter your own price. Select your pickup date and post."
    },
    {
      number: "2",
      icon: <Users className="w-12 h-12" />,
      title: "Verified Collectors & Recyclers",
      description: "Onboarded recyclers and collectors review, acquire the listed items, pay safely into GoCycle's escrow account, and select pickup date."
    },
    {
      number: "3",
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Collection Date",
      description: "A one-time PIN shared with the seller is given to the collector to verify details, ensure safety, and trigger payment release on pickup day. Payment is instantly released to the seller."
    }
  ];

  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How GoCycle Works</h2>
          <p className="text-lg text-muted-foreground">
            Simple, secure, and transparent process for selling your end-of-life batteries and solar panels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 h-full border border-border">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-primary mb-6 mt-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
