import { useState, useRef, useEffect } from 'react';
import { User, Building, Truck, Bus, Car, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Fleet Manager, Express Logistics",
      content: "MotoGPS has transformed how we manage our delivery fleet. The real-time tracking and route optimization have reduced our fuel costs by 23% and improved delivery times significantly. The customer support team is always responsive and helpful."
    },
    {
      name: "Michael Chen",
      position: "Operations Director, Metro Transit",
      content: "Since implementing MotoGPS across our bus fleet, we've seen dramatic improvements in on-time performance and passenger satisfaction. The geo-fencing feature has been particularly valuable for our urban routes."
    },
    {
      name: "Jessica Rivera",
      position: "CEO, City Cabs",
      content: "As a taxi company, vehicle security and driver safety are our top priorities. MotoGPS gives us peace of mind with instant alerts and comprehensive monitoring. The return on investment has been substantial."
    },
    {
      name: "Robert Kim",
      position: "Logistics Coordinator, FastTrack Delivery",
      content: "The driver scorecard feature has helped us improve safety metrics across our entire fleet. We've reduced incidents by 34% and our insurance costs have decreased as a result. Excellent product and stellar customer service."
    }
  ];

  const companies = [
    { icon: Building, name: "Acme Logistics" },
    { icon: Truck, name: "FastTrack Delivery" },
    { icon: Bus, name: "Metro Transit" },
    { icon: Car, name: "City Cabs" }
  ];

  const scrollToTestimonial = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const testimonialElement = scrollContainer.children[index];
      if (testimonialElement) {
        scrollContainer.scrollTo({
          left: testimonialElement.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const nextTestimonial = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollToTestimonial(newIndex);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Fleet Managers Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See what our customers say about their experience with MotoGPS
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-blue-800 hover:bg-blue-700 p-2 rounded-full z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-blue-800 hover:bg-blue-700 p-2 rounded-full z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonials scrollable container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto flex snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 flex-shrink-0 w-full snap-center"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-200 flex items-center justify-center">
                      <User size={36} className="text-blue-900" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <Quote size={32} className="text-blue-300" />
                    </div>
                    <p className="text-lg md:text-xl mb-6">
                      {testimonial.content}
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                      <p className="text-blue-200">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollToTestimonial(index)}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold mb-10">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <IconComponent size={36} className="mb-3 text-blue-200" />
                  <span className="text-center font-medium">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}