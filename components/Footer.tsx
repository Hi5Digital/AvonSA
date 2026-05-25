import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white mt-20">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              About
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Join Avon SA helps South Africans get started as Avon
              Representatives with guidance, support and simple online
              registration.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#why-join" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Join Avon
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm mb-4">+27 68 092 2679</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Instagram
              </a>
              <a
                href="mailto:info@joinavonsa.co.za"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/27680922679"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            Copyright © 2026 Join Avon SA | Powered by The Creative Corner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
