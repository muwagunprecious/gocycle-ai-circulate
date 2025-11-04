import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export const WaitlistForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userType: "",
    fullName: "",
    email: "",
    location: "",
    phone: "",
    comments: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation
    if (!formData.userType || !formData.fullName || !formData.email || !formData.location || !formData.phone) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      // For now, we'll just show success message
      // In production, you would integrate with an email service or backend
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Success! 🎉",
        description: "Thank you! You've been added to our waitlist. We'll notify you soon.",
      });

      // Reset form
      setFormData({
        userType: "",
        fullName: "",
        email: "",
        location: "",
        phone: "",
        comments: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Be the First to Know</h2>
            <p className="text-2xl font-semibold text-primary mb-4">Join Our Waitlist</p>
            <p className="text-lg text-muted-foreground">
              Be among the first to experience Africa's revolutionary AI-powered e-waste marketplace. 
              Sign up today and get early access!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-card border border-border space-y-6 animate-scale-in">
            {/* User Type */}
            <div className="space-y-2">
              <Label htmlFor="userType">I am a: *</Label>
              <Select 
                value={formData.userType} 
                onValueChange={(value) => setFormData({...formData, userType: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="recycler">Recycler-Collector</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input 
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location (Nigeria) *</Label>
              <Input 
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="e.g., Lagos, Abuja, Port Harcourt"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                placeholder="Enter 10-digit number without country code"
                maxLength={10}
                required
              />
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments">Additional Comments (Optional)</Label>
              <Textarea 
                id="comments"
                value={formData.comments}
                onChange={(e) => setFormData({...formData, comments: e.target.value})}
                placeholder="Any questions or additional information..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-6 text-lg rounded-full shadow-hover transition-all duration-300"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Your information is secure and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
