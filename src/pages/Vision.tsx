import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, 
  Rocket, 
  Heart,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const missionPoints = [
  {
    icon: GraduationCap,
    title: "Democratize Career Guidance",
    description: "Make scientific, research-backed career counseling accessible to every student, regardless of their background or location.",
  },
  {
    icon: Target,
    title: "Reduce Confusion",
    description: "Help students make confident decisions after 10th & 12th grade, eliminating the stress of choosing the wrong stream.",
  },
  {
    icon: Heart,
    title: "Support Parents",
    description: "Provide parents with clarity and data-backed insights, replacing pressure with understanding and support.",
  },
];

const values = [
  { label: "Science-First", description: "Every recommendation backed by research" },
  { label: "Student-Centric", description: "Your child's uniqueness is our priority" },
  { label: "Transparency", description: "Clear methodology, no hidden agendas" },
  { label: "Accessibility", description: "Quality guidance for everyone" },
];

const Vision = () => {
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
                Our Vision & Mission
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Empowering Every Child to{" "}
                <span className="text-primary">Choose Confidently</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where no student feels lost about their future. 
                Where career choices are made with clarity, not confusion.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-light via-secondary to-accent/20 rounded-3xl p-8 md:p-12 text-center"
              >
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-8 shadow-card">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                  "To empower every child to make confident, informed career decisions 
                  based on their unique personality, intelligence, and interests."
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to transform how students discover their career paths.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-card transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Illustration */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Journey We're Building
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Every student's journey is unique. We believe in providing the tools 
                  and guidance that help them climb their own ladder of success – 
                  one informed step at a time.
                </p>
                
                <div className="space-y-6">
                  {[
                    { step: "Self-Discovery", desc: "Understanding who you truly are" },
                    { step: "Exploration", desc: "Discovering career possibilities" },
                    { step: "Decision", desc: "Making confident, informed choices" },
                    { step: "Growth", desc: "Pursuing your unique path" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.step}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Growth Ladder Illustration */}
                <div className="bg-gradient-to-t from-primary-light to-secondary rounded-3xl p-8 md:p-12">
                  <div className="relative h-80">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{ bottom: `${i * 25}%` }}
                      >
                        <div 
                          className={`w-${16 - i * 2} h-12 bg-card rounded-xl shadow-soft flex items-center justify-center`}
                          style={{ width: `${180 - i * 30}px` }}
                        >
                          <span className="text-2xl">
                            {["🌱", "📚", "💡", "🎯"][i]}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <div className="w-16 h-16 bg-card rounded-full shadow-card flex items-center justify-center">
                        <span className="text-3xl">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center shadow-soft"
                >
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">{value.label}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Be part of the movement to help every student find their true path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessments">
                <Button variant="secondary" size="lg" className="group">
                  Start Your Discovery
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vision;