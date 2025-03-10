import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#2563eb] to-[#0891b2] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-sans font-bold text-4xl md:text-5xl leading-tight mb-4">
              Free Website Builder for Coaching Centers
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Build a professional website for your coaching center in minutes — no coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-[#f97316] hover:bg-[#f97316]/90 text-white font-sans font-semibold px-8 py-6 h-auto rounded-md text-center transition-all transform hover:scale-105"
                onClick={() => window.alert("This would redirect to the sign-up page for new users.")}
              >
                Start Building Now
              </Button>
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30 text-white font-sans font-semibold px-8 py-6 h-auto rounded-md text-center backdrop-blur-sm transition-all"
                onClick={() => {
                  const howItWorksSection = document.getElementById('how-it-works');
                  if (howItWorksSection) {
                    howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=600&q=60" 
              alt="Coaching website example" 
              className="rounded-lg shadow-2xl w-full max-w-md object-cover transform hover:scale-[1.02] transition-transform duration-300"
              style={{ aspectRatio: "4/3" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
