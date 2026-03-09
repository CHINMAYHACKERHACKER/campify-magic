import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Setup & Configure",
    description: "We set up your WhatsApp Business API, configure templates, and get everything ready for launch.",
  },
  {
    step: "02",
    title: "Create Templates",
    description: "Design professional message templates with buttons, links, and call-to-actions for your campaigns.",
  },
  {
    step: "03",
    title: "Launch Campaigns",
    description: "Import contacts, schedule your campaigns, and start sending messages to thousands instantly.",
  },
  {
    step: "04",
    title: "Track & Optimize",
    description: "Monitor delivery rates, read receipts, and campaign performance to optimize your outreach.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            How <span className="text-gradient">Campzen</span> Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Get started in four simple steps and begin reaching your audience on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="font-display text-6xl font-bold text-primary/10 mb-4">{s.step}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 text-primary/20">
                  →
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
