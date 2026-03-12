import { motion } from "framer-motion";
import { Send, Bell, FileText, Users, BarChart3, Repeat, MessageSquare, MessageCircle, Smartphone } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Campaigns",
    description: "Send promotional offers, product updates, or course announcements to your entire audience via WhatsApp Business API.",
    accent: "primary",
  },
  {
    icon: MessageCircle,
    title: "Google RCS Messaging",
    description: "Reach Android users with rich, interactive messages — carousels, buttons, and branded content through Google RCS.",
    accent: "primary",
  },
  {
    icon: Smartphone,
    title: "iMessage Campaigns",
    description: "Engage Apple users with stunning iMessage campaigns featuring rich media, links, and interactive elements.",
    accent: "primary",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description: "Schedule reminders for appointments, fee payments, order updates — fully automated across all channels.",
    accent: "primary",
  },
  {
    icon: FileText,
    title: "Message Templates",
    description: "Use official templates with buttons and CTAs for maximum engagement on WhatsApp, RCS, and iMessage.",
    accent: "primary",
  },
  {
    icon: Users,
    title: "Bulk Messaging",
    description: "Send messages to hundreds or thousands of contacts with a single click across multiple channels.",
    accent: "primary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Track delivery status, read rates, and campaign performance with detailed cross-channel dashboards.",
    accent: "primary",
  },
  {
    icon: Repeat,
    title: "Campaign Management",
    description: "Create, schedule, and manage multi-channel campaigns from one powerful, intuitive dashboard.",
    accent: "primary",
  },
  {
    icon: Send,
    title: "Smart Channel Routing",
    description: "Auto-route messages to the best channel for each contact — WhatsApp, RCS, or iMessage — for maximum reach.",
    accent: "primary",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px]" />
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
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 tracking-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Campzen</span>
            <br className="hidden sm:block" />
            Your Outreach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A complete multi-channel marketing suite — WhatsApp, Google RCS, and iMessage — built for modern businesses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative glass-card-elevated rounded-2xl p-7 hover:shadow-[var(--glow-primary)] transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/20 transition-all duration-500">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
