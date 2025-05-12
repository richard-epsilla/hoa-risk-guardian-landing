
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-hoa-darkBlue">
            <span className="text-hoa-blue">HOA</span>GPT
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-hoa-darkGray hover:text-hoa-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-hoa-darkGray hover:text-hoa-blue transition-colors">How It Works</a>
          <a href="#use-cases" className="text-hoa-darkGray hover:text-hoa-blue transition-colors">Use Cases</a>
          <a href="#pricing" className="text-hoa-darkGray hover:text-hoa-blue transition-colors">Pricing</a>
          <a href="#faq" className="text-hoa-darkGray hover:text-hoa-blue transition-colors">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-hoa-blue hover:bg-hoa-darkBlue text-white">
            Join Beta Waitlist
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-10">
                <a href="#features" className="text-hoa-darkGray hover:text-hoa-blue transition-colors text-lg">Features</a>
                <a href="#how-it-works" className="text-hoa-darkGray hover:text-hoa-blue transition-colors text-lg">How It Works</a>
                <a href="#use-cases" className="text-hoa-darkGray hover:text-hoa-blue transition-colors text-lg">Use Cases</a>
                <a href="#pricing" className="text-hoa-darkGray hover:text-hoa-blue transition-colors text-lg">Pricing</a>
                <a href="#faq" className="text-hoa-darkGray hover:text-hoa-blue transition-colors text-lg">FAQ</a>
                <Button className="bg-hoa-blue hover:bg-hoa-darkBlue text-white w-full">
                  Join Beta Waitlist
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
