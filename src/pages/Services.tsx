import React, { useEffect } from "react";
import {
  Search,
  Target,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  PenTool,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Award,
} from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "We're Always Cooking Up Something Great! Creative content that captures attention and drives engagement.",
      features: [
        "Blog Posts & Articles",
        "Social Media Content",
        "Video Scripts",
        "Visual Content Design",
      ],
      price: "Custom Pricing",
    },
    {
      icon: Target,
      title: "Content Strategy",
      description:
        "Planning That's Truly Brilliant! Strategic content planning that aligns with your business goals.",
      features: [
        "Content Calendar Planning",
        "Audience Research",
        "Brand Voice Development",
        "Performance Analytics",
      ],
      price: "Custom Pricing",
    },
    {
      icon: BarChart3,
      title: "Content Management",
      description:
        "Keeping Your Content Shipshape! Organized content management that keeps your brand consistent.",
      features: [
        "Content Scheduling",
        "Brand Guidelines",
        "Asset Management",
        "Quality Control",
      ],
      price: "Custom Pricing",
    },
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "Let's Get Social and Network! Complete social media management across all platforms.",
      features: [
        "Platform Management",
        "Community Engagement",
        "Content Posting",
        "Social Analytics",
      ],
      price: "Custom Pricing",
    },
    {
      icon: Award,
      title: "Brand Enhancement",
      description:
        "Making Your Brand the Best in Show! Elevate your brand presence and recognition.",
      features: [
        "Brand Positioning",
        "Visual Identity",
        "Brand Messaging",
        "Reputation Management",
      ],
      price: "Custom Pricing",
    },
    {
      icon: TrendingUp,
      title: "Vision Realization",
      description:
        "Turning Dreams into Digital Reality! Transform your brand vision into compelling content.",
      features: [
        "Vision Development",
        "Creative Direction",
        "Brand Storytelling",
        "Content Innovation",
      ],
      price: "Custom Pricing",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business, competitors, and market to develop a customized digital strategy.",
    },
    {
      step: "02",
      title: "Implementation",
      description:
        "Our expert team executes the strategy across all relevant channels with precision and care.",
    },
    {
      step: "03",
      title: "Optimization",
      description:
        "We continuously monitor performance and optimize campaigns for maximum results.",
    },
    {
      step: "04",
      title: "Growth & Scale",
      description:
        "As results improve, we scale successful strategies to accelerate your growth trajectory.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're Not Just Content, We're the Whole Kit and Caboodle (and a
              whole lot more!)
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in hover-lift glass rounded-xl p-8 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-lg font-semibold text-yellow-400 mb-4">
                    {service.price}
                  </p>
                  <button className="w-full bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 group flex items-center justify-center">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for every
              client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="fade-in text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We believe in providing customized solutions that spark the most
              significant impact for your business. Therefore, our pricing is
              tailored to your specific requirements. To provide you with the
              best possible quote, we need to understand your needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn-primary">
                Contact us for a personalized quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
