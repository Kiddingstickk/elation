import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      lines: ['1709 Edison Hwy', 'Baltimore, MD 21213, United States'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+1 (410) 617-8059'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['elationauto@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      lines: [
        'Mon-Fri: 8AM - 6PM',
        'Saturday: 9AM - 2PM',
        'Sunday: Closed',
      ],
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gear-overlay opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Contact Us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Visit us at our shop or give us a call. We're here to help with all your
              automotive needs.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border p-6 rounded group hover:border-primary transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary px-8 py-5 font-display text-lg flex-1">
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="px-8 py-5 font-display text-lg flex-1 border-border text-foreground hover:border-primary hover:text-primary bg-card"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map Embed */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] bg-card border border-border rounded overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14266.085983669504!2d-76.58905276236177!3d39.31194967317197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80511b847a099%3A0x7f7ed2ff151d8eda!2sElation%20Auto%20Repair!5e0!3m2!1sen!2sin!4v1767966618963!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Yellow Accent Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary rounded -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;