import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Zap, Send, Smartphone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(210_60%_50%/0.08)] blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <MessageSquare size={16} />
            WhatsApp
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(210_60%_95%)] text-[hsl(210_60%_35%)] text-sm font-medium">
            <MessageCircle size={16} />
            Google RCS
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(210_15%_95%)] text-[hsl(220_25%_35%)] text-sm font-medium">
            <Smartphone size={16} />
            iMessage
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Run Powerful{" "}
          <span className="text-gradient">Multi-Channel Campaigns</span>
          <br />
          That Convert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Create templates and send bulk campaigns across WhatsApp, Google RCS, and iMessage 
          with 90%+ open rates. The smartest way to reach your audience on every platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8" asChild>
            <a href="#contact">
              <Send size={18} />
              Start Your Campaign
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8" asChild>
            <a href="#features">
              <MessageSquare size={18} />
              See Features
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "90%+", label: "Open Rate" },
            { value: "10x", label: "More Engagement" },
            { value: "3", label: "Channels Supported" },
            { value: "1000s", label: "Messages Instantly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
