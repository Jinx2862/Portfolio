import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, Sprout } from "lucide-react";

const projectsData = [
  {
    title: "Crop Yield Prediction Using ML",
    type: "Research Project",
    period: "07/2025 – 10/2025",
    icon: Sprout,
    description: "Advanced machine learning research project for agricultural yield forecasting using Maharashtra state data from 2010-2020.",
    highlights: [
      "Reviewed 10-12 research papers on crop yield forecasting methodologies",
      "Performed comprehensive EDA with seasonal yield variation analysis",
      "Built and compared 5 model scenarios with outlier treatment",
      "Achieved improved accuracy using regression algorithms and feature scaling"
    ],
    tools: ["Python", "Pandas", "NumPy", "Machine Learning", "Excel"],
  },
  {
    title: "Power BI Dashboard",
    type: "Data Analytics",
    period: "05/2024 – 06/2024",
    icon: BarChart3,
    description: "Interactive dashboard analyzing recorded lecture performance across multiple platforms with actionable insights.",
    highlights: [
      "Designed interactive Power BI dashboard for performance analysis",
      "Cleaned and transformed raw data from multiple sources",
      "Analyzed course distribution and viewer engagement patterns",
      "Identified top-rated instructors and subtitle impact on views"
    ],
    tools: ["Power BI", "Excel", "DAX"],
  },
  {
    title: "Bankruptcy Prevention",
    type: "Classification Algorithm",
    period: "01/2024 – 02/2024",
    icon: TrendingUp,
    description: "Machine learning solution to predict bank bankruptcy using performance metrics and classification algorithms.",
    highlights: [
      "Analyzed bank data using Python and data analysis libraries",
      "Developed ML models to predict bankruptcy probability",
      "Implemented XGBoost and Logistic Regression algorithms",
      "Provided valuable insights for preventing financial insolvency"
    ],
    tools: ["Python", "Pandas", "XGBoost", "Logistic Regression"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Projects
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tools.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
