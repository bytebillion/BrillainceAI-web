import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const examples = [
  {
    title: "Math Excellence Academy",
    description: "A mathematics coaching center featuring interactive schedules and student success stories.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Global Language Hub",
    description: "Language coaching center with course catalogs, instructor profiles, and student testimonials.",
    image: "https://images.unsplash.com/photo-1610484826917-5ef323708255?auto=format&fit=crop&w=600&q=60"
  },
  {
    title: "Engineering Prep Institute",
    description: "Engineering entrance exam coaching with faculty details, success rates, and program information.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=60"
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

export default function ExamplesSection() {
  return (
    <section id="examples" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">Example Websites</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what coaching centers like yours have created with our platform.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {examples.map((example, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="relative">
                <img 
                  src={example.image} 
                  alt={example.title} 
                  className="w-full"
                  style={{ aspectRatio: "16/10" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-sans font-semibold text-white text-xl">{example.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4">
                  {example.description}
                </p>
                <button 
                  className="text-primary font-semibold hover:text-primary/80 inline-flex items-center bg-transparent border-none cursor-pointer p-0"
                  onClick={() => window.alert(`This would open a preview of the ${example.title} website template.`)}
                >
                  View Example <ArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button 
            className="text-primary font-sans font-semibold hover:text-primary/80 inline-flex items-center text-lg bg-transparent border-none cursor-pointer p-0"
            onClick={() => window.alert("This would navigate to a gallery of all coaching center website templates.")}
          >
            View More Examples <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
