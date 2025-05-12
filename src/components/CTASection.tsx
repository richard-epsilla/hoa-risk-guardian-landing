
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send this to your API
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-hoa-blue to-hoa-darkBlue text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to protect your community?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the HOAGPT beta waitlist today. Limited spots available—get early access and special pricing!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-white/10 border-white/20 placeholder:text-white/70 text-white"
          />
          <Button 
            type="submit" 
            className="bg-white hover:bg-white/90 text-hoa-darkBlue"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Notify Me"}
          </Button>
        </form>
        
        <p className="text-sm text-white/80">
          By joining our waitlist, you'll be the first to know when HOAGPT launches and receive exclusive early-adopter benefits.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
