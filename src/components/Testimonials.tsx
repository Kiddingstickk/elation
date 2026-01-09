import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jeffrey Champ',
    vehicle: '',
    rating: 5,
    text: "Best In Town. Definitely Recommend!! Come by PlZZZZ",
  },
  {
    id: 2,
    name: 'Michelle Ve',
    vehicle: '',
    rating: 5,
    text: "I’m truly impressed with the customer service and grateful for how promptly the work was completed. Great price.",
  },
  {
    id: 3,
    name: 'Franklin Posada Rivera',
    vehicle: '',
    rating: 5,
    text: "A good place where you can go with confidence and you will go out with your car problems solved. I have come 4 times or more to this place and I always leave happy for the help they give me. Recommended!",
  },
  {
    id: 4,
    name: 'Samuel Rios',
    vehicle: '',
    rating: 5,
    text: "Excellent service, all the staff were very friendly. My car had a lot of problems and they fixed every single one. I highly recommend this place.",
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gear-overlay opacity-20" />

      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 hazard-stripe" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real reviews from our customers at Elation Auto Repair.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card border border-border p-8 rounded relative group hover:border-primary transition-all duration-300 shadow-sm ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-display text-xl text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  {testimonial.vehicle && (
                    <div className="text-sm text-muted-foreground">{testimonial.vehicle}</div>
                  )}
                </div>
              </div>

              {/* Yellow Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div
          className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="inline-flex items-center gap-4 bg-card border border-primary/30 px-8 py-4 rounded shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-foreground">
              <span className="font-display text-2xl">4.9</span>
              <span className="text-muted-foreground ml-2">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;