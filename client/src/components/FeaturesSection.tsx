import { MousePointer, Palette, Smartphone, Mail, Image, CalendarDays, GraduationCap, Search } from "lucide-react";
import { motion } from "framer-motion";

// Feature sets
const featureSet1 = [
  {
    icon: <MousePointer className="text-sm" />,
    title: "Drag-and-Drop Editor",
    description: "Simply drag elements onto your page, customize them with a click, and see changes instantly."
  },
  {
    icon: <Palette className="text-sm" />,
    title: "Education-Focused Templates",
    description: "Choose from dozens of professionally designed templates specifically for coaching centers."
  },
  {
    icon: <Smartphone className="text-sm" />,
    title: "Mobile-Optimized Design",
    description: "All websites automatically adapt to look perfect on desktops, tablets, and smartphones."
  },
  {
    icon: <Mail className="text-sm" />,
    title: "Inquiry Management",
    description: "Collect and organize student inquiries directly through your website with built-in forms."
  }
];

const featureSet2 = [
  {
    icon: <Image className="text-sm" />,
    title: "Media Gallery",
    description: "Showcase your campus, faculty, and events with beautiful galleries and video integration."
  },
  {
    icon: <CalendarDays className="text-sm" />,
    title: "Class Schedule Display",
    description: "Easily publish and update your coaching schedule with our intuitive calendar tool."
  },
  {
    icon: <GraduationCap className="text-sm" />,
    title: "Success Stories Section",
    description: "Highlight student achievements and testimonials to build trust with prospective families."
  },
  {
    icon: <Search className="text-sm" />,
    title: "SEO Tools",
    description: "Built-in features to help your coaching center website rank higher in search results."
  }
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">Powerful Features, Simplified</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create a professional coaching center website, with zero technical skills required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=60" 
              alt="Drag-and-drop editor" 
              className="rounded-xl shadow-lg w-full"
              style={{ aspectRatio: "16/9" }}
            />
          </motion.div>
          
          <div>
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1 }}
            >
              {featureSet1.map((feature, index) => (
                <motion.div key={index} variants={featureVariants}>
                  <div className="flex items-center mb-3">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-sans font-semibold text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-11">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1 }}
            >
              {featureSet2.map((feature, index) => (
                <motion.div key={index} variants={featureVariants}>
                  <div className="flex items-center mb-3">
                    <div className="bg-[#0891b2] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-sans font-semibold text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-11">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=60" 
              alt="Website features for coaching centers" 
              className="rounded-xl shadow-lg w-full"
              style={{ aspectRatio: "16/9" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
