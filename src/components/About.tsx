import { Card } from "@/components/ui/card";
import { MapPin, Calendar, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="p-8 shadow-card hover-lift group">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary flex items-center gap-2">
              Career Objective
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-glow"></span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Seeking a challenging position in a reputable organization where I can 
              contribute my knowledge and skills in data science and machine learning, 
              while continuing to learn and develop in a professional environment.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 shadow-card hover-lift flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Pune, Maharashtra</p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover-lift flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="font-semibold">Date of Birth</p>
                <p className="text-muted-foreground">28 June 2002</p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover-lift flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="font-semibold">Hobbies</p>
                <p className="text-muted-foreground">Cricket, Reading Books</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
