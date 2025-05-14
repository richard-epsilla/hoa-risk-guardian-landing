import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hoa-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-hoa-blue">Board</span>Guardian
            </h3>
            <p className="text-white/80 mb-4">
              AI-powered risk and compliance assistant for HOA boards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-hoa-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-hoa-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-hoa-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {currentYear} BoardGuardian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
