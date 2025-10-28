import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up space-y-6">
          <div className="inline-block animate-scale-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-glow">
              Available for Opportunities
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-gradient leading-tight">
            Ajinkya Ajit Galande
          </h1>
          
          <div className="space-y-2">
            <p className="text-xl md:text-3xl font-display font-semibold text-foreground">
              Data Science Enthusiast
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              ML Engineer • Python Developer • Data Analyst
            </p>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            M.Sc. Computer Science student passionate about leveraging machine learning 
            and data analytics to solve real-world problems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-8">
            <Button
              variant="default"
              size="lg"
              className="gradient-primary shadow-glow hover:scale-105 hover:shadow-elegant transition-all duration-300 font-semibold text-lg px-8 group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://linkedin.com/in/ajinkya-galande"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-effect hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Ajinx2862"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-effect hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:ajinkyagalande1415@gmail.com"
              className="p-4 rounded-full glass-effect hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
