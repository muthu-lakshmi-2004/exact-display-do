import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  User,
  Building,
  Shield
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24-48 hours.",
    });
    
    setFormData({ name: "", email: "", role: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "truepathtech@gmail.com",
      link: "mailto:truepathtech@gmail.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91  8978988498",
      link: "tel:+91 8978988498",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Flat No.T5 - 901, Block 5, Vasavi Srinilayam Apt, L B Nagar, Hyderabad Hyderabad 500074 Telangana",
      link: null,
    },
  ];

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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                We'd Love to{" "}
                <span className="text-primary">Hear From You</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our assessments? Want to partner with us? 
                Or just want to say hello? We're here to help!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you soon.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        I am a... *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="">Select your role</option>
                          <option value="student">Student</option>
                          <option value="parent">Parent</option>
                          <option value="school">School / Institution</option>
                          <option value="counselor">Counselor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Privacy Note */}
                  <div className="mt-6 flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Your information is safe with us. We respect your privacy and will never 
                      share your details with third parties. Read our{" "}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-primary-light to-secondary rounded-3xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">Flat No.T5 - 901, Block 5,</p>
                    <p className="text-sm text-muted-foreground"> Vasavi Srinilayam Apt, L B Nagar, <br /> Hyderabad Hyderabad 500074 Telangana</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-4">Response Time</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">General Queries</span>
                      <span className="text-foreground font-medium">24-48 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">School Partnerships</span>
                      <span className="text-foreground font-medium">Same day</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Technical Support</span>
                      <span className="text-foreground font-medium">Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Check out our How It Works page for detailed information about our assessments and process.
            </p>
            <a href="/how-it-works">
              <Button variant="outline" size="lg">
                Visit How It Works
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;