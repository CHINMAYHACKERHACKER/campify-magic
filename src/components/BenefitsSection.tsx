import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
              Your customers are on WhatsApp, RCS, and iMessage. With Campzen, you reach them on every platform with messages they actually read and act on.
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
            className="relative space-y-4"
          >
            {/* WhatsApp Mock */}
            <div className="glass-card rounded-3xl p-6 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">W</div>
                <div>
                  <div className="font-semibold text-sm">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Business API</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-secondary rounded-2xl rounded-tl-sm p-4"
              >
                <p className="text-sm text-foreground">
                  Hello Rahul! 👋<br /><br />
                  Your Python class starts tomorrow at <strong>10:00 AM</strong>.<br />
                  Join using the link below.
                </p>
                <div className="mt-3 text-center">
                  <span className="text-xs text-primary font-medium">📎 Join Class</span>
                </div>
              </motion.div>
              <div className="text-right mt-1">
                <span className="text-[10px] text-muted-foreground">Delivered ✓✓</span>
              </div>
            </div>

            {/* RCS Mock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-3xl p-6 max-w-sm mx-auto"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-[hsl(210_60%_50%/0.15)] flex items-center justify-center font-display font-bold text-[hsl(210_60%_45%)] text-sm">R</div>
                <div>
                  <div className="font-semibold text-sm">Google RCS</div>
                  <div className="text-xs text-muted-foreground">Rich Messaging</div>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl rounded-tl-sm p-4">
                <p className="text-sm text-foreground">
                  🎉 Flash Sale!<br /><br />
                  Get <strong>30% off</strong> all courses this weekend.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">🛒 Shop Now</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">📋 View Details</span>
                </div>
              </div>
            </motion.div>

            {/* iMessage Mock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass-card rounded-3xl p-6 max-w-sm mx-auto"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-[hsl(220_15%_50%/0.15)] flex items-center justify-center font-display font-bold text-[hsl(220_20%_40%)] text-sm">i</div>
                <div>
                  <div className="font-semibold text-sm">iMessage</div>
                  <div className="text-xs text-muted-foreground">Apple Business Chat</div>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl rounded-tl-sm p-4">
                <p className="text-sm text-foreground">
                  Hi Sarah! 🍎<br /><br />
                  Your order #4521 has been shipped! Track it here.
                </p>
                <div className="mt-3 text-center">
                  <span className="text-xs text-primary font-medium">📦 Track Order</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
