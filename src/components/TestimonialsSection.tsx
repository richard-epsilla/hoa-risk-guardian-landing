import React from 'react';

const testimonials = [
  {
    quote: "BoardGuardian flagged our expiring policy 6 weeks early—saved us $10K in emergency insurance.",
    author: "Jane L.",
    title: "HOA Board President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a property manager overseeing 12 communities, BoardGuardian is like having an extra team member focused only on risk.",
    author: "Michael R.",
    title: "Property Management Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The document analysis saved our board hours of review time and caught compliance issues we would have missed.",
    author: "Sarah J.",
    title: "Community Association Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
];

const logos = [
  "Oakwood Heights HOA",
  "Willow Creek Community",
  "Mountain View Estates",
  "Harbor Pointe Properties",
  "Parkside Management",
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-hoa-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hoa-darkBlue mb-4">What Our Early Users Say</h2>
          <p className="max-w-3xl mx-auto text-hoa-gray">
            Communities using BoardGuardian are already seeing real benefits in risk management and compliance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-hoa-lightGray flex flex-col"
            >
              <div className="mb-6 flex-grow">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-hoa-teal mb-4">
                  <path d="M11.3413 4.5C9.12774 4.5 7.32388 5.24333 5.92651 6.72997C4.5534 8.28283 3.86572 10.0333 3.87072 12.0107C3.87322 13.3985 4.22388 14.6561 4.91906 15.777C5.6059 16.8815 6.54257 17.7329 7.72174 18.3375L8.0359 18.5018L7.86073 18.8581C7.60073 19.3476 7.21657 19.7847 6.7059 20.1643C6.52741 20.2945 6.42907 20.5048 6.44574 20.7209C6.46074 20.9307 6.58407 21.1243 6.77657 21.2319C6.92574 21.3205 7.09824 21.3656 7.27157 21.3656C7.41907 21.3656 7.5659 21.3284 7.69757 21.2562C8.52424 20.7392 9.17907 20.0922 9.65574 19.315C12.219 19.9516 14.7232 19.3243 16.6189 17.5184C18.3807 15.8476 19.2641 13.6141 19.1391 11.0729C19.0289 8.83947 18.1638 6.89991 16.5657 5.38992C15.0507 3.97159 13.272 4.5 11.3413 4.5ZM7.65157 19.554C7.65157 19.554 7.65074 19.554 7.65157 19.554V19.554ZM16.2382 12.1287C16.2907 12.1075 16.3682 12.0832 16.4757 12.0667C16.8232 12.0086 17.1857 12.0725 17.557 12.3402C17.7654 12.5048 17.8674 12.7296 17.8482 12.9635C17.8282 13.2076 17.6882 13.4209 17.4582 13.5526C17.3057 13.6391 17.1332 13.6817 16.9532 13.6817C16.7232 13.6817 16.5007 13.6102 16.3124 13.4732C15.9032 13.1718 15.7139 12.7448 15.804 12.3169C15.8615 12.039 16.0274 11.7902 16.2382 11.6333V12.1287Z" fill="currentColor"/>
                  <path d="M11.0267 11.7419V12.1287C11.0791 12.1075 11.1566 12.0832 11.2641 12.0667C11.6108 12.0086 11.9741 12.0725 12.3449 12.3402C12.5533 12.5048 12.6549 12.7296 12.6366 12.9635C12.6158 13.2076 12.4766 13.4209 12.2458 13.5526C12.0933 13.6391 11.9216 13.6817 11.7416 13.6817C11.5108 13.6817 11.2883 13.6102 11.1008 13.4732C10.6908 13.1718 10.5016 12.7448 10.5916 12.3169C10.6491 12.039 10.8158 11.7902 11.0267 11.6333V11.7419Z" fill="currentColor"/>
                </svg>
                <p className="text-hoa-darkGray italic mb-4">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-hoa-darkBlue">{testimonial.author}</h4>
                  <p className="text-sm text-hoa-gray">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-20">
          <h3 className="text-center text-hoa-darkBlue font-semibold mb-10">Trusted by pilot communities</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {logos.map((logo, index) => (
              <div key={index} className="text-hoa-gray font-medium text-sm md:text-base">
                {logo}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
