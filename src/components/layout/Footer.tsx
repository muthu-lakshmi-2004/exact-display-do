import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  T
                </span>
              </div>
              <span className="font-bold text-xl">
                TruePath<span className="text-primary-glow">Tech</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering students to discover their true career path through
              science-backed assessments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Assessments", href: "/assessments" },
                { name: "Vision & Mission", href: "/vision" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-glow transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For You */}
          <div>
            <h4 className="font-semibold text-lg mb-4">For You</h4>
            <ul className="space-y-2">
              {["Students", "Parents", "Schools", "Counselors"].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/70 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-primary-glow" />
                <span>truepathtech@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-primary-glow" />
                <span>+91 8978988498</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={40} className="text-primary-glow mt-0.5" />
                <span>
                  Flat No.T5 - 901, Block 5, Vasavi Srinilayam Apt, L B Nagar,
                  Hyderabad Hyderabad 500074 Telangana
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 TruePathTech by KraysInfotech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link
              to="/privacy"
              className="hover:text-primary-glow transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary-glow transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
