import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { submitToWaitlist } from '@/lib/formSubmit';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      await submitToWaitlist(email);
      
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

  const redirectToForm = () => {
    window.open('https://forms.gle/hxeN6cejQbh916SA9', '_blank');
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-hoa-lightGray to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hoa-darkBlue leading-tight mb-4">
              <span className="text-hoa-blue">HOAGPT:</span> AI-Driven Risk & Compliance Assistant for HOA Boards
            </h1>
            
            <h2 className="text-xl md:text-2xl text-hoa-gray mb-6">
              Instantly detect insurance lapses, compliance gaps, and action items from your HOA emails & documents
            </h2>
            
            <p className="text-hoa-darkGray mb-8">
              HOAGPT helps homeowner association boards stay ahead of risks, simplify compliance, and make informed decisions with AI-powered insights.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-hoa-blue hover:bg-hoa-darkBlue text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-hoa-lightGray animate-float">
              <div className="bg-hoa-blue bg-opacity-10 rounded-lg p-4 mb-4">
                <div className="flex items-start mb-3">
                  <div className="w-10 h-10 rounded-full bg-hoa-blue flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-hoa-darkBlue">Incoming HOA Email Analysis</h3>
                    <span className="text-sm text-hoa-gray">From: insurance@provider.com</span>
                  </div>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <div className="mb-2 pb-2 border-b border-dashed border-hoa-lightGray">
                    <span className="text-sm font-medium text-hoa-darkBlue">HOAGPT Analysis:</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                      <span className="text-sm text-red-600 font-medium">RISK DETECTED: Insurance policy expires in 30 days</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                      <span className="text-sm text-yellow-700">Renewal quote 15% higher than previous year</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-sm text-green-700">Recommended action: Schedule renewal review at next board meeting</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-hoa-teal bg-opacity-10 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-hoa-teal flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-hoa-darkBlue">Document Analysis</h3>
                    <span className="text-sm text-hoa-gray">bylaws-2023.pdf</span>
                  </div>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <div className="mb-2 pb-2 border-b border-dashed border-hoa-lightGray">
                    <span className="text-sm font-medium text-hoa-darkBlue">HOAGPT Summary:</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>Document contains updated reserve fund requirements (Section 5.2)</p>
                    <p>Compliance required by Jan 15th (90 days after adoption)</p>
                    <p className="font-medium text-hoa-teal">AI suggestion: Schedule budget review to ensure compliance with new minimum reserve levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
