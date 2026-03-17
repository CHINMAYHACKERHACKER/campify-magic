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
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:zen.camp@yahoo.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              zen.camp@yahoo.com
            </a>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <a
              href="mailto:kanashettichinmay@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              kanashettichinmay@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
