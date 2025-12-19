import { motion } from "framer-motion";
import { ClipboardList, Cpu, BarChart3, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Answer Questions",
    description: "Simple, age-appropriate questions designed for students aged 13-18",
    color: "bg-secondary",
    iconColor: "text-secondary-dark",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Scientific Analysis",
    description: "Our AI evaluates your personality & intelligence using proven models",
    color: "bg-primary-light",
    iconColor: "text-primary",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Get Insights",
    description: "Receive personalized career insights based on your unique strengths",
    color: "bg-accent-light",
    iconColor: "text-accent-foreground",
  },
  {
    number: "04",
    icon: Users,
    title: "Expert Session",
    description: "Optional one-on-one session with our certified career counselors",
    color: "bg-primary-light",
    iconColor: "text-primary",
  },
];

export const HowItWorksSection = () => {
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
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to discover your ideal career path
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}

              <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative z-10 h-full">
                {/* Step Number */}
                <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary via-secondary-dark to-accent rounded-full"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Start</span>
            <span>Your Future</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
