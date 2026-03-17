import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/40 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/campzen-logo.png" alt="Campzen" className="h-8 w-8 object-contain" />
            <span className="font-display text-xl font-bold text-gradient">Campzen</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Campzen. All rights reserved.
          </p>
          <a
            href="mailto:campzen@yahoo.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
          <a
            href="mailto:zen.camp@yahoo.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            zen.camp@yahoo.com
          </a>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
