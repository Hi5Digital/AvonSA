"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzxyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="sign-up" className="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container-max max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-luxury-charcoal mb-4">SIGN UP TODAY</h2>
          <p className="text-luxury-taupe text-lg">
            Take the first step towards your Avon journey. Fill in your details
            below and we'll get in touch with you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <Input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="WhatsApp/Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          {submitStatus === "success" && (
            <p className="text-green-600 text-center text-sm">
              ✓ Thank you! We'll be in touch soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-600 text-center text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Quick Action Links */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
          <a href="#" className="btn-ghost text-sm">
            Reinstatement Form
          </a>
          <span className="hidden md:inline text-gray-300">|</span>
          <a href="#" className="btn-ghost text-sm">
            Self-Registration
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
