
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter Plan",
    price: "$29",
    period: "per month per community",
    description: "Perfect for small HOAs and communities just getting started.",
    features: [
      "Up to 10 users",
      "100 emails per month",
      "20 document uploads",
      "Basic risk detection",
      "Email summaries",
      "30-day history"
    ],
    isPopular: false
  },
  {
    name: "Pro Plan",
    price: "$79",
    period: "per month",
    description: "Ideal for established HOAs needing comprehensive risk management.",
    features: [
      "Up to 50 users",
      "Unlimited emails",
      "Unlimited uploads",
      "Advanced risk detection",
      "Custom risk thresholds",
      "API access",
      "90-day history",
      "Priority support"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact for pricing",
    description: "For large-scale property management companies and HOA portfolios.",
    features: [
      "Unlimited users",
      "Unlimited communities",
      "Advanced integrations",
      "SSO authentication",
      "Dedicated support",
      "SLA guarantees",
      "Custom reporting",
      "Data retention options"
    ],
    isPopular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hoa-darkBlue mb-4">Simple, Transparent Pricing</h2>
          <p className="max-w-3xl mx-auto text-hoa-gray">
            Choose the plan that works best for your community's needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg border ${
                plan.isPopular ? 'border-hoa-blue ring-2 ring-hoa-blue' : 'border-hoa-lightGray'
              } bg-white overflow-hidden transition-all hover:shadow-xl`}
            >
              {plan.isPopular && (
                <div className="bg-hoa-blue text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-hoa-darkBlue mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-hoa-blue">{plan.price}</span>
                  <span className="text-hoa-gray ml-1">{plan.period}</span>
                </div>
                <p className="text-hoa-gray mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.isPopular ? 'bg-hoa-blue hover:bg-hoa-darkBlue' : 'bg-hoa-teal hover:bg-hoa-teal/90'
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Join Beta Waitlist"}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-hoa-teal flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-hoa-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-hoa-blue/10 px-4 py-2 rounded-full text-hoa-blue font-medium mb-2">
            Limited Time Offer
          </div>
          <h3 className="text-2xl font-bold text-hoa-darkBlue mb-4">Join the Beta – Free for Early Adopters</h3>
          <p className="text-hoa-gray max-w-2xl mx-auto mb-6">
            Get free access to HOAGPT during our beta period and lock in special pricing when we launch.
          </p>
          <Button size="lg" className="bg-hoa-blue hover:bg-hoa-darkBlue">
            Join the Beta Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
