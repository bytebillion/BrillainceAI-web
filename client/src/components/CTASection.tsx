import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2563eb] to-[#0891b2]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Coaching Center's Online Presence?
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10">
            Join thousands of coaching centers already using our platform to grow their business.
            Get started in minutes with our easy-to-use website builder.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white hover:bg-gray-100 text-primary font-sans font-semibold px-8 py-6 h-auto rounded-md inline-block transition-all transform hover:scale-105"
            >
              Start Building for Free
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-sans font-semibold px-8 py-6 h-auto rounded-md inline-block transition-all"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
