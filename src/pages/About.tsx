import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
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
                About TruePathTech
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Building Trust Through{" "}
                <span className="text-primary">Science & Empathy</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every child deserves clarity about their future. 
                TruePathTech combines psychological research with compassionate guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  TruePathTech is a digital career counseling platform developed by <strong className="text-foreground">Rupa Tech</strong>, 
                  designed to help school-going children (13+) discover their career direction using 
                  scientifically validated assessments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team combines expertise in psychology, education, and technology to create 
                  a platform that's both scientifically rigorous and child-friendly.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-primary-light rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary">10K+</p>
                    <p className="text-sm text-muted-foreground">Students Guided</p>
                  </div>
                  <div className="bg-secondary rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-secondary-dark">500+</p>
                    <p className="text-sm text-muted-foreground">Schools Partner</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-light to-secondary rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Heart, label: "Empathy First", color: "text-primary" },
                      { icon: Target, label: "Science-Backed", color: "text-secondary-dark" },
                      { icon: Users, label: "Student Focused", color: "text-accent-foreground" },
                      { icon: Award, label: "Expert Team", color: "text-primary" },
                    ].map((item, i) => (
                      <div key={i} className="bg-card rounded-xl p-4 text-center shadow-soft">
                        <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why We Exist
              </h2>
              <p className="text-muted-foreground">
                Too many students choose careers based on peer pressure or limited information. 
                We're here to change that.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Problem",
                  description: "Students face confusion after 10th & 12th, often choosing wrong streams leading to career dissatisfaction.",
                  color: "border-destructive/20 bg-destructive/5",
                },
                {
                  title: "Our Solution",
                  description: "Science-backed assessments combining personality, intelligence, and interest mapping for accurate career guidance.",
                  color: "border-primary/20 bg-primary-light",
                },
                {
                  title: "The Impact",
                  description: "Confident students making informed decisions, supported parents, and reduced career-related anxiety.",
                  color: "border-secondary/20 bg-secondary",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-6 border ${item.color}`}
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Our Commitment to Students
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                We promise to provide unbiased, research-backed guidance that puts your child's 
                unique strengths and interests at the center of their career journey.
              </p>
              <Link to="/assessments">
                <Button variant="secondary" size="lg" className="group">
                  Start the Journey
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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

export default About;