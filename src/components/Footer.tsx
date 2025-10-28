const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Ajinkya Ajit Galande. All rights reserved.
        </p>
        <p className="text-sm opacity-80">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
