import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contactData = [
  {
    icon: Mail,
    label: "Email",
    value: "ajinkyagalande1415@gmail.com",
    href: "mailto:ajinkyagalande1415@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9665661415",
    href: "tel:+919665661415",
  },
  {
    icon: Phone,
    label: "Alternate",
    value: "+91 7218828661",
    href: "tel:+917218828661",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ajinkya-galande",
    color: "hover:text-[#0077B5]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ajinx2862",
    color: "hover:text-foreground",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Get In Touch
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactData.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <Card className="p-4 shadow-card hover:shadow-elegant transition-smooth flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </Card>
                );

                return contact.href ? (
                  <a key={index} href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <Card className="p-8 shadow-card text-center">
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new opportunities, 
                collaborations, or just connecting with fellow tech enthusiasts.
              </p>
              
              <div className="flex gap-4 justify-center mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground shadow-card transition-smooth ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="gradient-primary shadow-glow w-full hover:scale-105 transition-smooth"
                onClick={() => window.location.href = 'mailto:ajinkyagalande1415@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </Card>

            <Card className="p-6 shadow-card mt-6">
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-sm text-muted-foreground">
                A/p - Hangarwadi, Tal - Indapur<br />
                Dist - Pune, Maharashtra, India
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
