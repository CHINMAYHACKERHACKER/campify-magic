import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 tracking-tight">
            Ready to <span className="text-gradient">Campzen</span>
            <br />
            Your Business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Get a free demo and see how Campzen powers your outreach across WhatsApp, Google RCS, and iMessage.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card-elevated rounded-3xl p-10 max-w-lg mx-auto relative overflow-hidden"
          >
            {/* Shimmer */}
            <div className="absolute inset-0 shimmer" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-6">
                <Mail size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Contact Us</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Reach out for a free demo and consultation
              </p>
              <a
                href="mailto:zen.camp@yahoo.com"
                className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline underline-offset-4 transition-all"
              >
                zen.camp@yahoo.com
              </a>
              <div className="mt-8">
                <Button variant="hero" size="lg" className="text-base px-8 group" asChild>
                  <a href="mailto:zen.camp@yahoo.com">
                    <MessageSquare size={18} />
                    Schedule a Demo
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
