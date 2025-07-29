import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "sparksocialmedia.in@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 9427407354",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "India",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon-Fri: 8am-6pm PST",
      description: "We respond within 24 hours",
    },
  ];

  const services = [
    "Content Creation",
    "Content Strategy",
    "Content Management",
    "Social Media Management",
    "Brand Enhancement",
    "Vision Realization",
    "Campaign Management",
    "Campaign Creation",
    "Other",
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create Content That{" "}
              <span className="gradient-text">Makes an Impact</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful brands who've transformed their
              digital presence with our expert content services. Your audience
              is waiting to hear your story.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="fade-in hover-lift glass rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {info.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2">{info.detail}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Start Your{" "}
                  <span className="gradient-text">Content Journey</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours with a customized content strategy for your brand.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Needed *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="loading-spinner"></div>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. We'll get back to you within
                      24 hours with a customized proposal for your project.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="slide-in-right space-y-8">
              {/* Google Map Placeholder */}
              <div className="glass rounded-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-400">India</p>
                    <p className="text-gray-400">
                      123 Innovation Drive, Tech Valley, CA 94041
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Need Immediate Help?
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+919427407354"
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <Phone className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                        Call Now
                      </h4>
                      <p className="text-sm text-gray-400">+91 9427407354</p>
                    </div>
                  </a>

                  <a
                    href="mailto:sparksocialmedia.in@gmail.com"
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-blue-400 mr-4" />
                    <div>
                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                        Email Us
                      </h4>
                      <p className="text-sm text-gray-400">
                        sparksocialmedia.in@gmail.com
                      </p>
                    </div>
                  </a>

                  <button className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group w-full">
                    <Calendar className="w-6 h-6 text-blue-400 mr-4" />
                    <div className="text-left">
                      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                        Schedule Meeting
                      </h4>
                      <p className="text-sm text-gray-400">
                        Book a free consultation
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass rounded-2xl p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold gradient-text mb-2">
                  Lightning Fast Response
                </h3>
                <p className="text-gray-400">
                  We typically respond to all inquiries within 2-4 hours during
                  business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get quick answers to common questions about our services and
              process
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Most projects are completed within 2-6 months, with ongoing optimization and support thereafter.",
              },
              {
                question: "What's included in your digital marketing services?",
                answer:
                  "Our comprehensive services include strategy development, campaign implementation, content creation, analytics, and ongoing optimization across all relevant channels.",
              },
              {
                question:
                  "Do you provide ongoing support after project completion?",
                answer:
                  "Yes! We offer various maintenance and support packages to ensure your digital assets continue performing optimally and stay up-to-date.",
              },
              {
                question: "Can you work with businesses of all sizes?",
                answer:
                  "Absolutely! We've successfully worked with startups, SMBs, and Fortune 500 companies, tailoring our approach to fit each client's unique needs and budget.",
              },
            ].map((faq, index) => (
              <div key={index} className="fade-in glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
