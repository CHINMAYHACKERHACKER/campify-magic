import { motion } from "framer-motion";
import { Send, Bell, FileText, Users, BarChart3, Repeat, MessageSquare, MessageCircle, Smartphone } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Campaigns",
    description: "Send promotional offers, product updates, or course announcements to your entire audience via WhatsApp Business API.",
  },
  {
    icon: MessageCircle,
    title: "Google RCS Messaging",
    description: "Reach Android users with rich, interactive messages — carousels, buttons, and branded content through Google RCS.",
  },
  {
    icon: Smartphone,
    title: "iMessage Campaigns",
    description: "Engage Apple users with stunning iMessage campaigns featuring rich media, links, and interactive elements.",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description: "Schedule reminders for appointments, fee payments, order updates, and more — fully automated across all channels.",
  },
  {
    icon: FileText,
    title: "Message Templates",
    description: "Use official templates with buttons and call-to-action links for maximum engagement on WhatsApp, RCS, and iMessage.",
  },
  {
    icon: Users,
    title: "Bulk Messaging",
    description: "Send messages to hundreds or thousands of contacts with a single click across multiple channels. Fast and reliable.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Track delivery status, read rates, and overall campaign performance with detailed cross-channel dashboards.",
  },
  {
    icon: Repeat,
    title: "Campaign Management",
    description: "Create, schedule, and manage multi-channel campaigns from one powerful, intuitive dashboard.",
  },
  {
    icon: Send,
    title: "Smart Channel Routing",
    description: "Automatically route messages to the best channel for each contact — WhatsApp, RCS, or iMessage — for maximum reach.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Campzen</span> Your Outreach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A complete multi-channel marketing suite — WhatsApp, Google RCS, and iMessage — built for businesses and educational institutes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card rounded-2xl p-8 group hover:shadow-[var(--glow-primary)] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
