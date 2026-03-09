import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "90%+ message open rate compared to SMS or email",
  "Direct communication with customers or students",
  "Faster announcements and important updates",
  "Increased engagement and response rates",
  "Helps generate repeat customers and better communication",
  "Professional WhatsApp Business API integration",
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Campzen</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              Why Businesses <span className="text-gradient">Love Us</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              WhatsApp is where your customers are. With Campify, you reach them directly with messages they actually read and act on.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={22} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Mock WhatsApp message UI */}
            <div className="glass-card rounded-3xl p-8 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary">C</div>
                <div>
                  <div className="font-semibold text-sm">Campify</div>
                  <div className="text-xs text-muted-foreground">WhatsApp Business</div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-secondary rounded-2xl rounded-tl-sm p-4 mb-3"
              >
                <p className="text-sm text-foreground">
                  Hello Rahul! 👋<br /><br />
                  Your Python class will start tomorrow at <strong>10:00 AM</strong>.<br /><br />
                  Please join using the link below.
                </p>
                <div className="mt-3 text-center">
                  <span className="text-xs text-primary font-medium">📎 Join Class</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="bg-secondary rounded-2xl rounded-tl-sm p-4"
              >
                <p className="text-sm text-foreground">
                  🎉 Special Offer!<br /><br />
                  Get <strong>20% off</strong> on all courses this week. Enroll now!
                </p>
                <div className="mt-3 text-center">
                  <span className="text-xs text-primary font-medium">🛒 Shop Now</span>
                </div>
              </motion.div>

              <div className="text-right mt-2">
                <span className="text-[10px] text-muted-foreground">Delivered ✓✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
