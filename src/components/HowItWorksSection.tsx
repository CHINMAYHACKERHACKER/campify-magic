import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Setup & Configure",
    description: "We set up your WhatsApp Business API, Google RCS, and iMessage Business accounts — all configured and ready to go.",
  },
  {
    step: "02",
    title: "Create Templates",
    description: "Design professional message templates with rich media, buttons, and CTAs for each channel.",
  },
  {
    step: "03",
    title: "Launch Campaigns",
    description: "Import contacts, select channels, schedule campaigns, and start sending messages to thousands instantly.",
  },
  {
    step: "04",
    title: "Track & Optimize",
    description: "Monitor delivery rates, read receipts, and cross-channel performance to optimize your outreach.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 tracking-tight">
            How <span className="text-gradient">Campzen</span> Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Get started in four simple steps and begin reaching your audience everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className="glass-card-elevated rounded-2xl p-7 h-full transition-all duration-500 group-hover:shadow-[var(--glow-primary)]">
                <div className="font-display text-5xl font-bold text-primary/8 group-hover:text-primary/15 transition-colors mb-4">
                  {s.step}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-primary/25" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
