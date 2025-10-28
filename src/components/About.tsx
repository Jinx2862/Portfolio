import { Card } from "@/components/ui/card";
import { MapPin, Calendar, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          About Me
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="p-8 shadow-card hover:shadow-elegant transition-smooth">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seeking a challenging position in a reputable organization where I can 
              contribute my knowledge and skills in data science and machine learning, 
              while continuing to learn and develop in a professional environment.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Pune, Maharashtra</p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Date of Birth</p>
                <p className="text-muted-foreground">28 June 2002</p>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
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
