const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <p className="mb-2 font-display font-semibold text-lg">
          © {new Date().getFullYear()} Ajinkya Ajit Galande. All rights reserved.
        </p>
        <p className="text-sm opacity-90">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
      
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.05;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
