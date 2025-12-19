import { motion } from "framer-motion";
import { Brain, Lightbulb, Heart, Target } from "lucide-react";

const insights = [
  {
    icon: Brain,
    title: "Personality",
    subtitle: "Big Five (OCEAN)",
    description: "Understanding your unique traits and how you interact with the world",
    color: "bg-secondary",
    textColor: "text-secondary-dark",
  },
  {
    icon: Lightbulb,
    title: "Intelligence",
    subtitle: "Multiple Intelligences",
    description: "Discovering your cognitive strengths and learning preferences",
    color: "bg-primary-light",
    textColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Interests",
    subtitle: "Skills & Passions",
    description: "Identifying what drives you and where your passion lies",
    color: "bg-accent-light",
    textColor: "text-accent-foreground",
  },
];

export const ConvergenceSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One Clear Direction from{" "}
            <span className="text-primary">Three Powerful</span> Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't guess careers. We analyze who you are.
          </p>
        </motion.div>

        {/* Convergence Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Lines - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              <motion.path
                d="M150 100 Q400 100 400 280"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M400 100 Q400 100 400 280"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.path
                d="M650 100 Q400 100 400 280"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </svg>
          </div>

          {/* Three Insights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-14 h-14 ${insight.color} rounded-xl flex items-center justify-center mb-4`}>
                    <insight.icon className={`w-7 h-7 ${insight.textColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{insight.title}</h3>
                  <p className={`text-sm font-medium ${insight.textColor} mb-3`}>{insight.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{insight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-primary rounded-2xl p-8 text-center shadow-glow">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Your Career Path
              </h3>
              <p className="text-primary-foreground/80">
                Personalized recommendations based on scientific analysis
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
