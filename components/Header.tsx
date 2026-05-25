"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Why Join", href: "#why-join" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="container-max px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="font-serif text-xl font-semibold tracking-wider text-luxury-plum"
        >
          JOIN AVON SA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-luxury-charcoal hover:text-luxury-plum transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/27680922679?text=I%20want%20to%20join%20Avon%20SA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-luxury-plum hover:text-luxury-berry transition-colors"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium">+27 68 092 2679</span>
          </a>
          <Button variant="primary" size="sm">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-luxury-charcoal hover:text-luxury-plum"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/27680922679?text=I%20want%20to%20join%20Avon%20SA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-luxury-plum font-medium"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={20} />
              +27 68 092 2679
            </a>
            <Button variant="primary" fullWidth>
              Join Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
