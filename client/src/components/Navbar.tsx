import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="text-primary text-2xl" />
          <span className="font-sans font-bold text-xl text-primary">EduSiteBuilder</span>
        </div>
        
        <div className="hidden md:flex space-x-6 font-sans">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
          <Link href="#examples" className="hover:text-primary transition-colors">Examples</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link href="#" className="hidden md:inline-block text-primary font-semibold hover:text-primary/80 transition-colors">Login</Link>
          <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white px-5 py-2 rounded-md font-semibold transition-all transform hover:scale-105">
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 py-3 shadow-md"
          >
            <div className="flex flex-col space-y-3 font-sans">
              <Link href="#features" onClick={closeMenu} className="hover:text-primary transition-colors py-2 border-b border-gray-100">Features</Link>
              <Link href="#how-it-works" onClick={closeMenu} className="hover:text-primary transition-colors py-2 border-b border-gray-100">How It Works</Link>
              <Link href="#examples" onClick={closeMenu} className="hover:text-primary transition-colors py-2 border-b border-gray-100">Examples</Link>
              <Link href="#pricing" onClick={closeMenu} className="hover:text-primary transition-colors py-2 border-b border-gray-100">Pricing</Link>
              <Link href="#" onClick={closeMenu} className="text-primary font-semibold py-2">Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
