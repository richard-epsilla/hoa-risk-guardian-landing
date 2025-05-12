
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Google Form submission URL
      const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf8DXG7FD1eGCT_3hpNY9XNeJbcRytEH9pHZi5AsInn-C73vw/formResponse';
      
      // Encode the email for the form
      const formData = new URLSearchParams();
      formData.append('entry.1128523808', email);
      
      // Send the form data
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Forms requires no-cors mode
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      // Show success message
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when HOAGPT launches!",
      });
      
      // Clear the form
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    window.open('https://forms.gle/hxeN6cejQbh916SA9', '_blank');
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

        <div className="mt-4">
          <Button
            variant="link"
            className="text-white underline"
            onClick={handleButtonClick}
          >
            Or join directly via Google Forms
          </Button>
        </div>
        
        <p className="text-sm text-white/80 mt-4">
          By joining our waitlist, you'll be the first to know when HOAGPT launches and receive exclusive early-adopter benefits.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
