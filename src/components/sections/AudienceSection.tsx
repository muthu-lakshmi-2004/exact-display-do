import { motion } from "framer-motion";
import { GraduationCap, Users2, School } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students (13-18)",
    tagline: "Confused about streams?",
    description: "Discover your unique strengths and find the career path that truly fits you.",
    cta: "Take Assessment",
    gradient: "from-primary/10 to-primary/5",
    borderColor: "border-primary/20",
    iconBg: "bg-primary-light",
    iconColor: "text-primary",
  },
  {
    icon: Users2,
    title: "Parents",
    tagline: "Unsure about your child's strengths?",
    description: "Get data-backed insights to support your child's career decisions with confidence.",
    cta: "Learn More",
    gradient: "from-secondary/30 to-secondary/10",
    borderColor: "border-secondary-dark/20",
    iconBg: "bg-secondary",
    iconColor: "text-secondary-dark",
  },
  {
    icon: School,
    title: "Schools & Institutions",
    tagline: "Want data-backed guidance?",
    description: "Partner with us to provide scientific career counseling for your students.",
    cta: "Partner With Us",
    gradient: "from-accent/10 to-accent/5",
    borderColor: "border-accent/30",
    iconBg: "bg-accent-light",
    iconColor: "text-accent-foreground",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 right-20 w-40 h-40 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-secondary/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-light text-accent-foreground text-sm font-medium rounded-full mb-4">
            For Everyone
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who Is This <span className="text-primary">For</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored guidance for every stakeholder in a student's career journey
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`h-full bg-gradient-to-b ${audience.gradient} rounded-3xl p-8 border ${audience.borderColor} hover:shadow-card transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${audience.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <audience.icon className={`w-8 h-8 ${audience.iconColor}`} />
                </div>

                {/* Tagline */}
                <p className="text-sm font-medium text-primary mb-2">{audience.tagline}</p>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{audience.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{audience.description}</p>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  {audience.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
