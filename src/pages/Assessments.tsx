import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Lightbulb, 
  Heart,
  ArrowRight,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const assessments = [
  {
    icon: Heart,
    title: "Personality Assessment",
    subtitle: "Big Five (OCEAN) Model",
    description: "Discover your core personality traits that influence how you work, learn, and interact with others.",
    traits: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
    duration: "8-10 mins",
    color: "bg-primary-light border-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Brain,
    title: "Intelligence Mapping",
    subtitle: "Multiple Intelligence Theory",
    description: "Identify your dominant intelligence types based on Howard Gardner's research-backed framework.",
    traits: ["Linguistic", "Logical-Mathematical", "Spatial", "Musical", "Interpersonal", "Intrapersonal", "Naturalist", "Bodily-Kinesthetic"],
    duration: "10-12 mins",
    color: "bg-secondary border-secondary-dark/20",
    iconColor: "text-secondary-dark",
  },
  {
    icon: Lightbulb,
    title: "Interest & Skill Discovery",
    subtitle: "Aptitude Assessment",
    description: "Explore your natural interests and skill inclinations to find career paths that excite you.",
    traits: ["Creative", "Analytical", "Social", "Technical", "Leadership", "Service-oriented"],
    duration: "5-7 mins",
    color: "bg-accent/20 border-accent/30",
    iconColor: "text-accent-foreground",
  },
];

const benefits = [
  "Scientifically validated methodology",
  "Age-appropriate questions",
  "Personalized career recommendations",
  "Detailed strength analysis",
  "Parent-friendly report",
  "Expert counselor support",
];

const Assessments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary-light rounded-full text-primary font-medium text-sm mb-6">
                Assessments Overview
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Three Assessments,{" "}
                <span className="text-primary">One Clear Direction</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our comprehensive assessment suite combines personality analysis, 
                intelligence mapping, and interest discovery to guide you towards 
                your ideal career path.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>~25 minutes total</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-5 h-5 text-accent" />
                  <span>No preparation needed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Assessments Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {assessments.map((assessment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl border p-8 ${assessment.color} hover:shadow-card transition-shadow`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-card flex items-center justify-center mb-6 shadow-soft`}>
                    <assessment.icon className={`w-8 h-8 ${assessment.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {assessment.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {assessment.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {assessment.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-3">What we measure:</p>
                    <div className="flex flex-wrap gap-2">
                      {assessment.traits.slice(0, 5).map((trait, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {trait}
                        </span>
                      ))}
                      {assessment.traits.length > 5 && (
                        <span className="px-3 py-1 bg-card rounded-full text-xs font-medium text-muted-foreground">
                          +{assessment.traits.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{assessment.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Results Work */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How Your Results Come Together
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We don't just look at one aspect of who you are. By analyzing the intersection 
                  of your personality, intelligence, and interests, we identify career paths 
                  where you're most likely to thrive and find fulfillment.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Convergence Diagram */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-light via-secondary to-accent/20 rounded-3xl p-8 md:p-12">
                    <div className="relative aspect-square flex items-center justify-center">
                      {/* Center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-card rounded-full shadow-card flex items-center justify-center z-10">
                          <div className="text-center">
                            <span className="text-2xl">🎯</span>
                            <p className="text-xs font-bold text-foreground mt-1">Career Path</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Orbiting elements */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-8"
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-20 h-20 bg-card rounded-full shadow-soft flex items-center justify-center">
                            <div className="text-center">
                              <Heart className="w-6 h-6 text-primary mx-auto" />
                              <p className="text-[10px] font-medium text-foreground mt-1">Personality</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2">
                          <div className="w-20 h-20 bg-card rounded-full shadow-soft flex items-center justify-center">
                            <div className="text-center">
                              <Brain className="w-6 h-6 text-secondary-dark mx-auto" />
                              <p className="text-[10px] font-medium text-foreground mt-1">Intelligence</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 translate-y-1/2">
                          <div className="w-20 h-20 bg-card rounded-full shadow-soft flex items-center justify-center">
                            <div className="text-center">
                              <Lightbulb className="w-6 h-6 text-accent-foreground mx-auto" />
                              <p className="text-[10px] font-medium text-foreground mt-1">Interests</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sample Output */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Your Report Includes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                After completing all assessments, you'll receive a comprehensive report 
                with actionable insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📊", title: "Personality Profile", desc: "Visual breakdown of your Big Five traits" },
                { icon: "🧩", title: "Intelligence Map", desc: "Your dominant intelligence types ranked" },
                { icon: "💼", title: "Career Clusters", desc: "Top 5 career fields suited for you" },
                { icon: "📋", title: "Action Steps", desc: "Next steps and recommendations" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-soft text-center"
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Discover Your Path?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Start your assessment journey today and take the first step towards a fulfilling career.
            </p>
            <Button variant="secondary" size="lg" className="group">
              Begin Assessment Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessments;