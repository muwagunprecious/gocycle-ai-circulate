import { Mail, MapPin, Shield, Clock, TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">GoCycle Africa</h3>
              <p className="text-muted-foreground">
                Africa's first AI-powered e-waste marketplace, turning waste into value and environmental impact.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a href="mailto:contact@gocycle.africa" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@gocycle.africa
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Census Close, Surulere - Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-border">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-medium">Speedy Pick-up</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="font-medium">Dynamic Pricing</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GoCycle Africa. All rights reserved.</p>
            <p className="mt-2">Building a cleaner, greener Africa through innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
