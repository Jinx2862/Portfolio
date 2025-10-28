import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Database, Monitor } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["C", "HTML", "Python"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Power BI", "MS Excel"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    category: "Platforms",
    icon: Monitor,
    skills: ["Windows", "Linux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-card hover-lift group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                    <Icon className="w-8 h-8 transition-transform" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="gradient-primary text-primary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
