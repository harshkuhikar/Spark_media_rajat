import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    { number: "250+", label: "Clients Served", icon: Users },
    { number: "500%", label: "Average ROI", icon: TrendingUp },
    { number: "93%", label: "Client Satisfaction", icon: Award },
    { number: "1000+", label: "Campaigns Launched", icon: Target },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, BrandFlow Inc.",
      content:
        "Spark Media transformed our content strategy completely. Our engagement rates increased by 400% within 6 months.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, ContentCorp",
      content:
        "The team at Spark Media delivered beyond expectations. Their content strategy doubled our social media following.",
      avatar:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, CreativeFlow",
      content:
        "Working with Spark Media was a game-changer. They helped us create content that truly resonates with our audience.",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">
                Content Creation Agency
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Content that makes your
              <br />
              <span className="gradient-text">brand shine</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tired of content that falls flat? Spark Media is here to ignite
              your brand's message and create content that truly connects. We
              offer a full spectrum of content services to help your business
              shine brighter than the competition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="btn-primary group"
                style={{ display: "flex", alignItems: "center" }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
        <div
          className="absolute bottom-20 right-10 floating"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center fade-in hover-lift glass rounded-xl p-6"
              >
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              We Amplify Your{" "}
              <span className="gradient-text">Social Media Presence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connecting your brand with audiences across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Instagram",
                description:
                  "Visual storytelling that captures attention and builds engaged communities around your brand.",
                icon: "📸",
              },
              {
                title: "Facebook",
                description:
                  "Comprehensive social media strategies that connect with diverse audiences and drive engagement.",
                icon: "👥",
              },
              {
                title: "Twitter",
                description:
                  "Real-time engagement and thought leadership content that positions your brand as an industry expert.",
                icon: "🐦",
              },
              {
                title: "LinkedIn",
                description:
                  "Professional networking and B2B content strategies that generate quality leads and partnerships.",
                icon: "💼",
              },
              {
                title: "YouTube",
                description:
                  "Video content creation and channel management that educates, entertains, and converts viewers.",
                icon: "🎥",
              },
              {
                title: "TikTok",
                description:
                  "Viral content strategies and trend-based marketing that reaches younger demographics effectively.",
                icon: "🎵",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="fade-in hover-lift glass rounded-xl p-8 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <Link to="/services" className="btn-primary">
              Let Us Manage Your Social Presence
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how we've helped businesses achieve extraordinary results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="fade-in hover-lift glass rounded-xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Let Your Brand <span className="gradient-text">Spark</span>{" "}
              Online!
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful brands who've transformed their
              digital presence with our expert content services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link to="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
