import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Sign Up for Free",
    description: "Create your account in seconds with just your email address. No credit card required to get started.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=300&q=60"
  },
  {
    number: 2,
    title: "Choose a Template",
    description: "Select from our education-focused templates designed specifically for coaching centers of all types.",
    image: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?auto=format&fit=crop&w=300&q=60"
  },
  {
    number: 3,
    title: "Customize Your Site",
    description: "Personalize colors, add your content, upload images, and arrange elements to match your coaching center's brand.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=300&q=60"
  },
  {
    number: 4,
    title: "Publish and Grow",
    description: "Launch your site with one click, then easily update and add content as your coaching center evolves.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=300&q=60"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Create your coaching center website in just four simple steps — no technical knowledge needed.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="md:flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                      <h3 className="font-sans font-semibold text-2xl mb-3">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    <div className="relative flex justify-center md:justify-start md:w-0">
                      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center z-10 border-4 border-white shadow">
                        <span className="font-sans font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="rounded-lg shadow-md mx-auto"
                        style={{ aspectRatio: "16/9", maxWidth: "300px" }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 hidden md:block">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="rounded-lg shadow-md mx-auto"
                        style={{ aspectRatio: "16/9", maxWidth: "300px" }}
                      />
                    </div>
                    <div className="relative flex justify-center md:justify-start md:w-0">
                      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center z-10 border-4 border-white shadow">
                        <span className="font-sans font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:text-left">
                      <h3 className="font-sans font-semibold text-2xl mb-3">{step.title}</h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-[#f97316] hover:bg-[#f97316]/90 text-white font-sans font-semibold px-8 py-6 h-auto rounded-md inline-block transition-all transform hover:scale-105"
            onClick={() => {
              const examplesSection = document.getElementById('examples');
              if (examplesSection) {
                examplesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            See Example Websites
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
