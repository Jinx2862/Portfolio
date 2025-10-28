import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
            Ajinkya Ajit Galande
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Data Science Enthusiast | ML Engineer | Python Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            M.Sc. Computer Science student passionate about leveraging machine learning 
            and data analytics to solve real-world problems
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <Button
              variant="default"
              size="lg"
              className="gradient-primary shadow-glow hover:scale-105 transition-smooth"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://linkedin.com/in/ajinkya-galande"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground shadow-card transition-smooth"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Ajinx2862"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground shadow-card transition-smooth"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:ajinkyagalande1415@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground shadow-card transition-smooth"
            >
              <Mail className="w-5 h-5" />
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
