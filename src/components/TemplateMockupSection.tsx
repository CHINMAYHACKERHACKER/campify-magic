import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageSquare, MessageCircle, Smartphone, Check, CheckCheck } from "lucide-react";

type Channel = "whatsapp" | "rcs" | "imessage";

const channelConfig: Record<Channel, {
  label: string;
  icon: typeof MessageSquare;
  color: string;
  glowClass: string;
  sender: string;
  subtitle: string;
  avatarLetter: string;
  avatarBg: string;
}> = {
  whatsapp: {
    label: "WhatsApp",
    icon: MessageSquare,
    color: "text-primary",
    glowClass: "glow-primary",
    sender: "Campzen Business",
    subtitle: "Business API · Online",
    avatarLetter: "C",
    avatarBg: "bg-primary/15 text-primary",
  },
  rcs: {
    label: "Google RCS",
    icon: MessageCircle,
    color: "text-[hsl(210_60%_45%)]",
    glowClass: "glow-rcs",
    sender: "Campzen Store",
    subtitle: "Rich Messaging · Verified ✓",
    avatarLetter: "C",
    avatarBg: "bg-[hsl(210_60%_50%/0.12)] text-[hsl(210_60%_45%)]",
  },
  imessage: {
    label: "iMessage",
    icon: Smartphone,
    color: "text-[hsl(220_20%_35%)]",
    glowClass: "glow-imessage",
    sender: "Campzen",
    subtitle: "Business Chat · Verified",
    avatarLetter: "C",
    avatarBg: "bg-[hsl(220_20%_40%/0.1)] text-[hsl(220_20%_35%)]",
  },
};

const templates: Record<Channel, { messages: { text: string; time: string; ctas?: string[] }[] }> = {
  whatsapp: {
    messages: [
      {
        text: "Hi Rahul! 👋\n\nYour Python class starts tomorrow at 10:00 AM.\n\nPlease join using the link below.",
        time: "10:30 AM",
        ctas: ["📎 Join Class"],
      },
      {
        text: "🎉 Special Offer!\n\nGet 20% off on all courses this week.\nEnroll now before it expires!",
        time: "10:31 AM",
        ctas: ["🛒 Enroll Now", "📋 View Courses"],
      },
    ],
  },
  rcs: {
    messages: [
      {
        text: "🔥 Flash Sale Alert!\n\nExclusive 30% off on premium plans.\nLimited time only — don't miss out!",
        time: "2:15 PM",
        ctas: ["🛍️ Shop Now", "📋 View Plans"],
      },
      {
        text: "📦 Order Update\n\nYour order #8842 has been shipped!\nEstimated delivery: Friday.",
        time: "2:16 PM",
        ctas: ["📍 Track Order"],
      },
    ],
  },
  imessage: {
    messages: [
      {
        text: "Hi Sarah! 🍎\n\nYour appointment is confirmed for March 15 at 2:00 PM.\n\nWe look forward to seeing you!",
        time: "11:00 AM",
        ctas: ["📅 Add to Calendar"],
      },
      {
        text: "💳 Payment Reminder\n\nYour subscription renews on March 20.\nUpdate your payment method if needed.",
        time: "11:01 AM",
        ctas: ["💰 Manage Billing", "❓ Get Help"],
      },
    ],
  },
};

const tabs: { id: Channel; label: string; comingSoon: boolean }[] = [
  { id: "whatsapp", label: "WhatsApp", comingSoon: false },
  { id: "rcs", label: "Google RCS", comingSoon: true },
  { id: "imessage", label: "iMessage", comingSoon: true },
];

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="flex items-center gap-1.5 px-4 py-3 bg-secondary rounded-2xl rounded-tl-sm w-fit"
  >
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"
      />
    ))}
  </motion.div>
);

const MessageBubble = ({ text, time, ctas, delay }: { text: string; time: string; ctas?: string[]; delay: number }) => {
  const [showTyping, setShowTyping] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => setShowTyping(false), delay * 1000 + 800);
    const msgTimer = setTimeout(() => setShowMessage(true), delay * 1000 + 900);
    return () => { clearTimeout(typingTimer); clearTimeout(msgTimer); };
  }, [delay]);

  return (
    <div className="mb-3">
      <AnimatePresence mode="wait">
        {showTyping && !showMessage && <TypingIndicator key="typing" />}
      </AnimatePresence>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-secondary rounded-2xl rounded-tl-sm p-3.5 max-w-[92%]">
              <p className="text-[11px] sm:text-xs text-foreground whitespace-pre-line leading-relaxed">{text}</p>
              {ctas && ctas.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-border/30 flex flex-wrap gap-1.5">
                  {ctas.map((cta) => (
                    <span
                      key={cta}
                      className="text-[10px] bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium cursor-pointer hover:bg-primary/20 transition-colors"
                    >
                      {cta}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-end gap-1 mt-1.5">
                <span className="text-[9px] text-muted-foreground">{time}</span>
                <CheckCheck size={11} className="text-primary/60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PhoneFrame = ({ type, channel }: { type: "iphone" | "android"; channel: Channel }) => {
  const config = channelConfig[channel];
  const data = templates[channel];

  const chatContent = (
    <div className="min-h-[340px]">
      {/* Chat header */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className={`w-8 h-8 rounded-full ${config.avatarBg} flex items-center justify-center font-display font-bold text-[11px]`}>
          {config.avatarLetter}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[11px] text-foreground truncate">{config.sender}</div>
          <div className="text-[9px] text-muted-foreground">{config.subtitle}</div>
        </div>
      </div>
      {/* Messages */}
      <div className="p-3">
        {data.messages.map((msg, i) => (
          <MessageBubble
            key={`${channel}-${i}`}
            text={msg.text}
            time={msg.time}
            ctas={msg.ctas}
            delay={0.5 + i * 1.5}
          />
        ))}
      </div>
    </div>
  );

  if (type === "iphone") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-[270px] sm:w-[290px]"
        style={{ perspective: "1200px" }}
      >
        {/* Glow behind phone */}
        <div className={`absolute -inset-4 rounded-[3rem] ${config.glowClass} opacity-40 blur-xl`} />
        
        <div className="relative rounded-[2.8rem] border-[3px] border-foreground/12 bg-foreground/[0.03] p-2 shadow-2xl">
          <div className="rounded-[2.4rem] bg-card overflow-hidden shadow-inner">
            {/* Dynamic Island */}
            <div className="flex justify-center pt-2.5 pb-1.5 bg-card relative">
              <div className="w-[90px] h-[26px] bg-foreground rounded-full relative overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary/60"
                />
              </div>
            </div>
            {chatContent}
            {/* Home indicator */}
            <div className="flex justify-center py-2.5 bg-card">
              <div className="w-32 h-1 bg-foreground/12 rounded-full" />
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">iPhone</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-[270px] sm:w-[290px]"
      style={{ perspective: "1200px" }}
    >
      {/* Glow behind phone */}
      <div className={`absolute -inset-4 rounded-[2rem] ${config.glowClass} opacity-30 blur-xl`} />
      
      <div className="relative rounded-[1.8rem] border-[3px] border-foreground/12 bg-foreground/[0.03] p-2 shadow-2xl">
        <div className="rounded-[1.4rem] bg-card overflow-hidden shadow-inner">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 pt-2.5 pb-1.5 bg-card">
            <span className="text-[9px] text-muted-foreground font-semibold">12:00</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 bg-foreground/12 rounded-[2px]" />
              <div className="w-3 h-2 bg-foreground/12 rounded-[2px]" />
              <div className="w-5 h-2.5 bg-primary/30 rounded-[2px] relative">
                <div className="absolute inset-0.5 bg-primary/50 rounded-[1px]" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
          {chatContent}
          {/* Nav bar */}
          <div className="flex justify-center gap-10 py-2.5 bg-card">
            <div className="w-4 h-4 border-[1.5px] border-foreground/12 rounded-[3px]" />
            <div className="w-4 h-4 border-[1.5px] border-foreground/12 rounded-full" />
            <div className="w-4 h-0.5 mt-2 bg-foreground/12 rounded-full" />
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">Android</span>
      </div>
    </motion.div>
  );
};

const TemplateMockupSection = () => {
  const [activeChannel, setActiveChannel] = useState<Channel>("whatsapp");
  const [key, setKey] = useState(0);

  const handleTabChange = (ch: Channel) => {
    setActiveChannel(ch);
    setKey((prev) => prev + 1);
  };

  return (
    <section id="templates" className="py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Live Preview
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 tracking-tight">
            See Templates in{" "}
            <span className="text-gradient">Action</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Preview exactly how your campaigns look on real devices across all three messaging platforms.
          </p>
        </motion.div>

        {/* Premium channel tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex gap-1 p-1.5 rounded-2xl bg-muted/70 backdrop-blur-sm border border-border/30">
            {tabs.map((tab) => {
              const config = channelConfig[tab.id];
              const Icon = config.icon;
              const isActive = activeChannel === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-400 ${
                    isActive
                      ? "bg-card text-foreground shadow-lg shadow-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={16} className={isActive ? config.color : ""} />
                  {tab.label}
                  {tab.comingSoon && (
                    <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      Soon
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-card shadow-lg -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Phone mockups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
          >
            <PhoneFrame type="iphone" channel={activeChannel} />
            <PhoneFrame type="android" channel={activeChannel} />
          </motion.div>
        </AnimatePresence>

        {/* Feature highlight below phones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { label: "Rich Media Support", desc: "Images, carousels & buttons" },
            { label: "Real-Time Delivery", desc: "Instant message delivery" },
            { label: "Smart Templates", desc: "Pre-approved & optimized" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Check size={16} className="text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                <div className="text-[11px] text-muted-foreground">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TemplateMockupSection;
