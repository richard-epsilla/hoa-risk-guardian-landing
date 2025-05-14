import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is BoardGuardian?",
    answer: "BoardGuardian is an AI-powered assistant designed specifically for HOA boards and property management companies. It analyzes emails, documents, and communications to detect potential insurance risks, compliance issues, and helps boards make informed decisions through automated summaries and notifications."
  },
  {
    question: "How do I integrate BoardGuardian with my existing email system?",
    answer: "Integration is simple! You'll receive a unique email address to forward or CC your HOA-related emails to. You can also directly upload documents through our secure web portal. For more advanced users, we offer API access and webhooks to connect with your existing systems."
  },
  {
    question: "When does the beta launch?",
    answer: "Our beta program is starting soon! When you join our waitlist, you'll receive updates about the launch date and be among the first to get access. Beta participants will receive special pricing when we officially launch."
  },
  {
    question: "Is my HOA data secure?",
    answer: "Absolutely. BoardGuardian implements bank-level security with SOC 2 compliant infrastructure. All data is encrypted both in transit and at rest. We maintain strict access controls, and you can define user permissions for your team members. We never share your data with third parties."
  },
  {
    question: "Can BoardGuardian replace our property manager or attorney?",
    answer: "BoardGuardian is designed to complement, not replace, your existing team. It helps identify potential issues earlier, makes your property manager and attorney more efficient by providing them with concise summaries, and creates an audit trail of communications about risks and compliance."
  },
  {
    question: "What types of documents can BoardGuardian analyze?",
    answer: "BoardGuardian can analyze virtually any text-based document relevant to HOA operations, including CC&Rs, bylaws, meeting minutes, insurance policies, vendor contracts, financial statements, and resident communications. We support PDF, Word, Excel, plain text, and most common email formats."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hoa-darkBlue mb-4">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-hoa-gray">
            Find answers to common questions about BoardGuardian.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-hoa-lightGray rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 text-left text-hoa-darkBlue font-medium hover:bg-hoa-lightGray/30">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-hoa-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
