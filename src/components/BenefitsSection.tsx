import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "90%+ message open rate compared to SMS or email",
  "Direct communication across WhatsApp, Google RCS, and iMessage",
  "Reach both Android and Apple users natively",
  "Rich media support — carousels, buttons, and interactive content",
  "Faster announcements and important updates on every platform",
  "Increased engagement and response rates across channels",
  "Smart routing delivers via the best channel per contact",
  "Professional API integration for all three platforms",
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Campzen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 tracking-tight">
              Why Businesses{" "}
              <span className="text-gradient">Love Us</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Your customers are on WhatsApp, RCS, and iMessage. With Campzen, you reach them on every platform with messages they actually read and act on.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative stats card */}
            <div className="glass-card-elevated rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
              
              <div className="relative">
                <h3 className="font-display text-2xl font-bold mb-8">Campaign Performance</h3>
                
                {/* Animated stat bars */}
                {[
                  { label: "WhatsApp Open Rate", value: 94, color: "bg-primary" },
                  { label: "RCS Engagement", value: 87, color: "bg-[hsl(210_60%_50%)]" },
                  { label: "iMessage Read Rate", value: 91, color: "bg-[hsl(220_20%_40%)]" },
                  { label: "Email (comparison)", value: 21, color: "bg-muted-foreground/30" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="mb-5 last:mb-0"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{stat.label}</span>
                      <span className="text-sm font-bold text-foreground">{stat.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full ${stat.color}`}
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                      <ArrowRight size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">4.5x higher than email</div>
                      <div className="text-xs text-muted-foreground">Average across all messaging channels</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
