import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 10,000+ Students
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Helping Students{" "}
              <span className="text-primary">Discover</span>{" "}
              Their True Path
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Science-backed career guidance using{" "}
              <span className="text-secondary-dark font-semibold">personality</span>,{" "}
              <span className="text-primary font-semibold">intelligence</span> &{" "}
              <span className="text-accent-foreground font-semibold">interests</span> assessment.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/assessments">
                <Button variant="hero" size="lg" className="group">
                  Start Your Discovery
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="hero-outline" size="lg" className="group">
                  <Play size={18} className="mr-1" />
                  How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary-light border-2 border-card flex items-center justify-center text-xs font-bold text-primary"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+10k students</span>
              </div>
              <div className="h-6 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src={heroIllustration}
                alt="Student at career crossroads with multiple paths ahead"
                className="w-full h-auto rounded-3xl shadow-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-1/4 bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Intelligence</p>
                    <p className="text-sm font-semibold text-foreground">8 Types Mapped</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                    <span className="text-xl">💚</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Personality</p>
                    <p className="text-sm font-semibold text-foreground">Big Five Model</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
