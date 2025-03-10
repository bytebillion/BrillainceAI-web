import { Search, Medal, MessageSquare, CalendarDays, Smartphone, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Search className="text-xl" />,
    title: "Boost Visibility",
    description: "Attract more students by improving your online presence. Be discoverable when students search for coaching options."
  },
  {
    icon: <Medal className="text-xl" />,
    title: "Showcase Achievements",
    description: "Display your courses, faculty credentials, and student success stories to build credibility with potential learners."
  },
  {
    icon: <MessageSquare className="text-xl" />,
    title: "Easy Communication",
    description: "Provide simple contact forms and inquiry options, making it easier for prospective students to reach you."
  },
  {
    icon: <CalendarDays className="text-xl" />,
    title: "Schedule Management",
    description: "Post class schedules, upcoming events, and important dates for current and prospective students."
  },
  {
    icon: <Smartphone className="text-xl" />,
    title: "Mobile Accessibility",
    description: "Reach students on-the-go with a responsive website that works perfectly on smartphones and tablets."
  },
  {
    icon: <Handshake className="text-xl" />,
    title: "Build Trust",
    description: "A professional website signals credibility to parents and students considering your coaching services."
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

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">Why Your Coaching Center Needs a Website</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today's digital world, an online presence is essential for educational institutions. Here's why:
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-light p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              variants={itemVariants}
            >
              <div className="bg-blue-50 text-primary rounded-full w-14 h-14 flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600 flex-grow">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
