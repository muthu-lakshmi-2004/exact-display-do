import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ClipboardList, 
  Brain, 
  LineChart, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  HelpCircle
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Answer Simple Questions",
    description: "Complete age-appropriate questions designed to understand your personality, interests, and thinking style. No right or wrong answers!",
    details: ["15-20 minutes to complete", "Yes/No and rating scale questions", "Fun and engaging format"],
    color: "bg-primary-light text-primary",
  },
  {
    number: "02",
    icon: Brain,
    title: "Scientific Analysis",
    description: "Your responses are evaluated using globally recognized psychological models - Big Five Personality and Multiple Intelligence Theory.",
    details: ["Big Five (OCEAN) personality mapping", "8 types of intelligence assessed", "Interest & aptitude correlation"],
    color: "bg-secondary text-secondary-dark",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Personalized Insights",
    description: "Receive a detailed report showing your personality profile, intelligence strengths, and recommended career clusters.",
    details: ["Visual personality profile", "Strength-based recommendations", "Career cluster suggestions"],
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Expert Counseling",
    description: "Optionally connect with our certified career counselors for a personalized session to discuss your results and plan ahead.",
    details: ["One-on-one sessions available", "Parent involvement welcomed", "Action plan development"],
    color: "bg-primary-light text-primary",
  },
];

const faqs = [
  {
    question: "How long does the assessment take?",
    answer: "The complete assessment takes about 15-20 minutes. We recommend completing it in one sitting for the most accurate results.",
  },
  {
    question: "Is there any preparation needed?",
    answer: "No preparation needed! Just answer honestly based on how you naturally think and feel. There are no right or wrong answers.",
  },
  {
    question: "What age group is this for?",
    answer: "Our assessments are designed for students aged 13-18 (Grades 8-12). The questions are age-appropriate and engaging.",
  },
  {
    question: "How accurate are the results?",
    answer: "Our assessments are based on globally validated psychological models with over 90% accuracy in predicting career satisfaction.",
  },
];

const HowItWorks = () => {
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
                Simple 4-Step Process
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Journey to{" "}
                <span className="text-primary">Career Clarity</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how our scientifically validated assessment process works 
                to help you find your true career path.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-6xl font-bold text-muted/50">{step.number}</span>
                      <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`rounded-3xl p-8 ${step.color} bg-opacity-20`}>
                      <div className="aspect-square max-w-sm mx-auto flex items-center justify-center">
                        <step.icon className="w-32 h-32 opacity-30" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What You'll Discover
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive assessment reveals three key dimensions that shape your ideal career path.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personality Profile",
                  description: "Understand your Big Five traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional Stability.",
                  icon: "🎭",
                },
                {
                  title: "Intelligence Strengths",
                  description: "Discover your dominant intelligences among 8 types: Linguistic, Logical, Musical, Spatial, and more.",
                  icon: "🧠",
                },
                {
                  title: "Career Clusters",
                  description: "Get matched with career fields that align with your unique combination of personality and intelligence.",
                  icon: "🎯",
                },
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
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Join thousands of students who have discovered their true path.
            </p>
            <Link to="/assessments">
              <Button variant="secondary" size="lg" className="group">
                Begin Assessment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;