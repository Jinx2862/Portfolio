import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. in Computer Science",
    institution: "Indira College of Commerce and Science, Tathawade",
    location: "Pune",
    year: "2026",
    grade: "First Year CGPA: 8.87",
    current: true,
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Vidya Pratishan's Commerce and Science College, Indapur",
    location: "Pune",
    year: "2023",
    grade: "CGPA: 9.28",
    current: false,
  },
  {
    degree: "12th Grade | Science",
    institution: "B.H. Chate Jr College, Gauddara",
    location: "Pune",
    year: "2020",
    grade: "Percentage: 81.69%",
    current: false,
  },
  {
    degree: "10th Grade | CBSE",
    institution: "The Greenfingers School, Akluj",
    location: "Solapur",
    year: "2018",
    grade: "Percentage: 71%",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient">
            Education
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-glow hidden md:block"></div>

                <Card className={`p-6 shadow-card hover-lift group ${
                  edu.current ? 'border-2 border-primary shadow-glow' : ''
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full flex-shrink-0 transition-all ${
                      edu.current ? 'bg-primary text-primary-foreground' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          edu.current 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.year}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                      <p className="text-primary font-semibold">{edu.grade}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
