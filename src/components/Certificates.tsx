import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificatesData = [
  {
    title: "Excel Masterclass",
    provider: "Learn with Lokesh Lalwani",
  },
  {
    title: "Introduction to Python",
    provider: "Kaggle",
  },
  {
    title: "Data Science Certification",
    provider: "Excelr Solutions",
  },
  {
    title: "Python (Basic)",
    provider: "HackerRank",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Certificates & Achievements
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificatesData.map((cert, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.provider}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-card text-center">
          <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
            <Award className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Additional Achievement</h3>
          <p className="text-muted-foreground">
            Attended NSS Camp during graduation - contributing to community service and social development
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Certificates;
