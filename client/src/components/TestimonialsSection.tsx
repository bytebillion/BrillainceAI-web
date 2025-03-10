import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Director, Excel Academy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    quote: "Our student inquiries increased by 70% within the first month of launching our website. The platform was incredibly easy to use, even for someone with no technical skills like me."
  },
  {
    name: "Priya Desai",
    role: "Founder, Bright Future Coaching",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    quote: "The templates were perfect for our educational needs. We were able to showcase our tutors, courses, and student achievements beautifully. Parents frequently mention how professional our website looks."
  },
  {
    name: "Amit Patel",
    role: "CEO, Future Leaders Institute",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    stars: 4.5,
    quote: "As a growing coaching center, we needed an online presence but had a limited budget. This platform gave us a professional website without the high cost of hiring a web developer."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400" />);
    }
    
    return <div className="flex mb-4 text-yellow-400">{stars}</div>;
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">What Coaching Centers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from coaching centers that have transformed their online presence with our platform.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-sans font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              {renderStars(testimonial.stars)}
              <p className="text-gray-600 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
