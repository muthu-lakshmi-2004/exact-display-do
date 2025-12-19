import { motion } from "framer-motion";
import { Shield, Award, BookOpen, Users } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Big Five (OCEAN)",
    description: "Globally accepted personality assessment model used by psychologists worldwide",
  },
  {
    icon: BookOpen,
    title: "Multiple Intelligence Theory",
    description: "Howard Gardner's research-backed framework for understanding cognitive strengths",
  },
  {
    icon: Award,
    title: "Expert Designed",
    description: "Created with education and psychology professionals for accuracy",
  },
  {
    icon: Users,
    title: "10,000+ Success Stories",
    description: "Trusted by students and parents across India for career clarity",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full mb-4">
            Why Trust Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built on <span className="text-primary">Globally Accepted</span> Psychological Models
          </h2>
          <p className="text-lg text-muted-foreground">
            Our assessments are rooted in decades of scientific research
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scientific Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-sm">🔬</span>
            </div>
            <span className="text-sm font-medium text-foreground">Research-Backed</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
              <span className="text-sm">🎓</span>
            </div>
            <span className="text-sm font-medium text-foreground">Expert Validated</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-8 h-8 bg-accent-light rounded-full flex items-center justify-center">
              <span className="text-sm">🔒</span>
            </div>
            <span className="text-sm font-medium text-foreground">Data Private</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
