import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, ArrowRight, Sparkles } from "lucide-react";

const floatingMessages = [
  { text: "📦 Order shipped!", x: -320, y: -80, delay: 0, channel: "whatsapp" },
  { text: "✅ Payment received", x: 280, y: -120, delay: 1.5, channel: "rcs" },
  { text: "🎓 Class at 10 AM", x: -280, y: 60, delay: 3, channel: "imessage" },
  { text: "🎉 20% off today!", x: 320, y: 100, delay: 2, channel: "whatsapp" },
  { text: "📅 Reminder set", x: -200, y: 160, delay: 4, channel: "rcs" },
];

const channelColors: Record<string, string> = {
  whatsapp: "border-primary/30 bg-primary/5",
  rcs: "border-[hsl(210_60%_50%/0.3)] bg-[hsl(210_60%_50%/0.05)]",
  imessage: "border-[hsl(220_20%_40%/0.3)] bg-[hsl(220_20%_40%/0.05)]",
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(152 60% 42%) 1px, transparent 1px), linear-gradient(90deg, hsl(152 60% 42%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06], rotate: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(210_60%_50%/0.06)] blur-[80px]"
        />
      </div>

      {/* Floating message bubbles (desktop only) */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.8, 1, 1, 0.9],
              y: [0, -15, -15, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              delay: msg.delay,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 px-4 py-2 rounded-2xl border backdrop-blur-sm text-xs font-medium text-foreground/70 ${channelColors[msg.channel]}`}
            style={{ marginLeft: msg.x, marginTop: msg.y }}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Multi-Channel Messaging Platform
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>

        {/* Channel pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {[
            { label: "WhatsApp", color: "bg-primary/10 text-primary border-primary/20", soon: false },
            { label: "Google RCS", color: "bg-[hsl(210_60%_50%/0.1)] text-[hsl(210_60%_40%)] border-[hsl(210_60%_50%/0.2)]", soon: true },
            { label: "iMessage", color: "bg-[hsl(220_20%_40%/0.08)] text-[hsl(220_20%_35%)] border-[hsl(220_20%_40%/0.15)]", soon: true },
          ].map((ch, i) => (
            <motion.span
              key={ch.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium ${ch.color}`}
            >
              <div className="w-2 h-2 rounded-full bg-current opacity-60" />
              {ch.label}
              {ch.soon && (
                <span className="ml-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                  Soon
                </span>
              )}
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-7 tracking-tight"
        >
          Campaigns That
          <br />
          <span className="text-gradient">Truly Convert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Create templates and launch campaigns across WhatsApp, Google RCS & iMessage — all from one powerful dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base px-8 group" asChild>
            <a href="#contact">
              <Send size={18} />
              Start Your Campaign
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8" asChild>
            <a href="#features">
              <MessageSquare size={18} />
              Explore Features
            </a>
          </Button>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "90%+", label: "Open Rate", sub: "vs 20% email" },
            { value: "10x", label: "Engagement", sub: "higher response" },
            { value: "3", label: "Channels", sub: "unified platform" },
            { value: "1000s", label: "Messages", sub: "sent instantly" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 text-center group hover:shadow-[var(--glow-primary)] transition-all duration-500"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
