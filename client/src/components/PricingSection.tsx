import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Perfect for small coaching centers getting started",
    features: [
      { included: true, text: "1 website" },
      { included: true, text: "Mobile-responsive design" },
      { included: true, text: "5 pages maximum" },
      { included: true, text: "Basic contact form" },
      { included: false, text: "Custom domain" },
      { included: false, text: "Remove EduSiteBuilder branding" }
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline",
    popular: false
  },
  {
    name: "Standard",
    price: "₹499",
    period: "/month",
    description: "Ideal for established coaching centers",
    features: [
      { included: true, text: "1 website" },
      { included: true, text: "Mobile-responsive design" },
      { included: true, text: "Unlimited pages" },
      { included: true, text: "Advanced forms with file uploads" },
      { included: true, text: "Custom domain" },
      { included: true, text: "Remove EduSiteBuilder branding" }
    ],
    buttonText: "Get Started",
    buttonVariant: "primary",
    popular: true
  },
  {
    name: "Premium",
    price: "₹999",
    period: "/month",
    description: "For growing coaching networks",
    features: [
      { included: true, text: "3 websites" },
      { included: true, text: "Mobile-responsive design" },
      { included: true, text: "Unlimited pages" },
      { included: true, text: "Advanced forms with integrations" },
      { included: true, text: "Multiple custom domains" },
      { included: true, text: "Priority support" }
    ],
    buttonText: "Upgrade Now",
    buttonVariant: "outline",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-dark mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start with our free plan and upgrade as your coaching center grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden ${
                plan.popular 
                  ? "border-2 border-primary relative shadow-lg transform md:scale-105" 
                  : "border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#f97316] text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6 border-b">
                <h3 className="font-sans font-bold text-xl mb-2">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="font-sans font-bold text-4xl">{plan.price}</span>
                  <span className="text-gray-500 ml-1 mb-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="text-green-500 mt-1 mr-3" />
                      ) : (
                        <X className="text-red-400 mt-1 mr-3" />
                      )}
                      <span className={feature.included ? "" : "text-gray-400"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button 
                    className={`w-full ${
                      plan.buttonVariant === "primary" 
                        ? "bg-primary hover:bg-primary/90 text-white" 
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    } text-center py-3 h-auto rounded-md font-sans font-semibold transition-colors`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
