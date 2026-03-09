const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-bold text-gradient">Campify</div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Campify. All rights reserved.
        </p>
        <a
          href="mailto:convopilot@gmail.com"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          convopilot@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
