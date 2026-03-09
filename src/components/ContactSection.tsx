import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get Started</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Ready to <span className="text-gradient">Campzen</span> Your Business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            We provide a quick demo to show how the system works. Our team assists with template approvals, 
            campaign setup, WhatsApp API configuration, and ongoing technical support.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-10 max-w-lg mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail size={32} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Contact Us</h3>
            <p className="text-muted-foreground mb-6">
              Reach out for a free demo and consultation
            </p>
            <a
              href="mailto:convopilot@gmail.com"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
            >
              convopilot@gmail.com
            </a>
            <div className="mt-8">
              <Button variant="hero" size="lg" className="text-base px-8" asChild>
                <a href="mailto:convopilot@gmail.com">
                  <MessageSquare size={18} />
                  Schedule a Demo
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
