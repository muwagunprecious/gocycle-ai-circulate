import { Rocket, Gift, Users } from "lucide-react";

export const EarlyAccess = () => {
  const benefits = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Early Access",
      description: "Be the first to use our platform before the public launch."
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "Special Offers",
      description: "Exclusive launch benefits and promotional pricing."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community",
      description: "Join a growing sustainability network making real impact."
    }
  ];

  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Early Access Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Join now and enjoy exclusive advantages as a founding member
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
