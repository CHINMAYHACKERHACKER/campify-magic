import { motion } from "framer-motion";
import { useState } from "react";

type Channel = "whatsapp" | "rcs" | "imessage";

const channelTabs: { id: Channel; label: string }[] = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "rcs", label: "Google RCS" },
  { id: "imessage", label: "iMessage" },
];

const templates: Record<Channel, { sender: string; messages: { text: string; cta?: string; ctaSecondary?: string }[] }> = {
  whatsapp: {
    sender: "Campzen Business",
    messages: [
      {
        text: "Hi Rahul! 👋\n\nYour Python class starts tomorrow at 10:00 AM.\n\nPlease join using the link below.",
        cta: "📎 Join Class",
      },
      {
        text: "🎉 Special Offer!\n\nGet 20% off on all courses this week. Enroll now before it expires!",
        cta: "🛒 Enroll Now",
      },
    ],
  },
  rcs: {
    sender: "Campzen Store",
    messages: [
      {
        text: "🔥 Flash Sale Alert!\n\nExclusive 30% off on premium plans. Limited time only!",
        cta: "🛍️ Shop Now",
        ctaSecondary: "📋 View Plans",
      },
      {
        text: "📦 Order Update\n\nYour order #8842 has been shipped and will arrive by Friday.",
        cta: "📍 Track Order",
      },
    ],
  },
  imessage: {
    sender: "Campzen",
    messages: [
      {
        text: "Hi Sarah! 🍎\n\nYour appointment is confirmed for March 15 at 2:00 PM.\n\nSee you there!",
        cta: "📅 Add to Calendar",
      },
      {
        text: "💳 Payment Reminder\n\nYour subscription renews on March 20. Update your payment method if needed.",
        cta: "💰 Manage Billing",
      },
    ],
  },
};

const PhoneFrame = ({ type, children }: { type: "android" | "iphone"; children: React.ReactNode }) => {
  if (type === "iphone") {
    return (
      <div className="relative mx-auto w-[260px] sm:w-[280px]">
        {/* iPhone frame */}
        <div className="rounded-[2.5rem] border-[3px] border-foreground/15 bg-foreground/5 p-2 shadow-2xl">
          <div className="rounded-[2rem] bg-card overflow-hidden">
            {/* Dynamic Island */}
            <div className="flex justify-center pt-2 pb-1 bg-card">
              <div className="w-24 h-6 bg-foreground/10 rounded-full" />
            </div>
            {children}
            {/* Home indicator */}
            <div className="flex justify-center py-2 bg-card">
              <div className="w-28 h-1 bg-foreground/15 rounded-full" />
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <span className="text-xs font-medium text-muted-foreground">iPhone</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      {/* Android frame */}
      <div className="rounded-[1.5rem] border-[3px] border-foreground/15 bg-foreground/5 p-2 shadow-2xl">
        <div className="rounded-[1.2rem] bg-card overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 pt-2 pb-1 bg-card">
            <span className="text-[9px] text-muted-foreground font-medium">12:00</span>
            <div className="flex gap-1">
              <div className="w-3 h-2 bg-foreground/15 rounded-sm" />
              <div className="w-3 h-2 bg-foreground/15 rounded-sm" />
              <div className="w-5 h-2 bg-primary/40 rounded-sm" />
            </div>
          </div>
          {children}
          {/* Nav bar */}
          <div className="flex justify-center gap-8 py-2 bg-card">
            <div className="w-5 h-5 border-2 border-foreground/15 rounded-sm" />
            <div className="w-5 h-5 border-2 border-foreground/15 rounded-full" />
            <div className="w-5 h-0.5 mt-2.5 bg-foreground/15 rounded-full" />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <span className="text-xs font-medium text-muted-foreground">Android</span>
      </div>
    </div>
  );
};

const MessageBubble = ({ text, cta, ctaSecondary, channel, delay }: { text: string; cta?: string; ctaSecondary?: string; channel: Channel; delay: number }) => {
  const bubbleColor = channel === "whatsapp"
    ? "bg-secondary"
    : channel === "rcs"
      ? "bg-secondary"
      : "bg-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className={`${bubbleColor} rounded-2xl rounded-tl-sm p-3 mb-2`}>
        <p className="text-xs text-foreground whitespace-pre-line leading-relaxed">{text}</p>
        {(cta || ctaSecondary) && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {cta && (
              <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                {cta}
              </span>
            )}
            {ctaSecondary && (
              <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                {ctaSecondary}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ChatScreen = ({ channel }: { channel: Channel }) => {
  const data = templates[channel];
  const channelIcon = channel === "whatsapp" ? "W" : channel === "rcs" ? "R" : "i";
  const channelColor = channel === "whatsapp"
    ? "bg-primary/20 text-primary"
    : channel === "rcs"
      ? "bg-[hsl(210_60%_50%/0.15)] text-[hsl(210_60%_45%)]"
      : "bg-[hsl(220_15%_50%/0.15)] text-[hsl(220_20%_40%)]";

  return (
    <div className="min-h-[320px]">
      {/* Chat header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
        <div className={`w-7 h-7 rounded-full ${channelColor} flex items-center justify-center font-display font-bold text-[10px]`}>
          {channelIcon}
        </div>
        <div>
          <div className="font-semibold text-[11px] text-foreground">{data.sender}</div>
          <div className="text-[9px] text-muted-foreground">
            {channel === "whatsapp" ? "Business API" : channel === "rcs" ? "Rich Messaging" : "Business Chat"}
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="p-3 space-y-1">
        {data.messages.map((msg, i) => (
          <MessageBubble
            key={i}
            text={msg.text}
            cta={msg.cta}
            ctaSecondary={msg.ctaSecondary}
            channel={channel}
            delay={0.3 + i * 0.25}
          />
        ))}
        <div className="text-right">
          <span className="text-[9px] text-muted-foreground">Delivered ✓✓</span>
        </div>
      </div>
    </div>
  );
};

const TemplateMockupSection = () => {
  const [activeChannel, setActiveChannel] = useState<Channel>("whatsapp");

  return (
    <section id="templates" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Templates</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            See Templates in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Preview how your campaigns look on real devices — both iPhone and Android — across all three channels.
          </p>
        </motion.div>

        {/* Channel tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 p-1 rounded-xl bg-muted">
            {channelTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveChannel(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeChannel === tab.id
                    ? "bg-card text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Phone mockups */}
        <motion.div
          key={activeChannel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <PhoneFrame type="iphone">
            <ChatScreen channel={activeChannel} />
          </PhoneFrame>
          <PhoneFrame type="android">
            <ChatScreen channel={activeChannel} />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  );
};

export default TemplateMockupSection;
