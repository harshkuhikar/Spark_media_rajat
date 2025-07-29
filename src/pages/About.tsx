import React, { useEffect } from "react";
import { Users, Target, Award, Lightbulb, Heart, Zap } from "lucide-react";

const About = () => {
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

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every strategy is designed with measurable outcomes and ROI in mind.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships based on trust and transparency.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from strategy to execution.",
    },
  ];

  const team = [
    {
      name: "Rajat Srivastava",
      position: "Founder, Spark Media",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "The spark behind the fire! Passionate about creating content that makes brands shine and connects with audiences.",
    },
    {
      name: "ChatGPT",
      position: "Marketing Assistant",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Our AI assistant is like having a marketing expert at your fingertips 24/7, helping create content that resonates.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">About Spark Media</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet the Team That <span className="gradient-text">Sparks</span>{" "}
              the Magic!
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At Spark Media, we're passionate about creating content that makes
              your brand shine. Our team combines creativity with strategy to
              deliver content that truly connects with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  It all started with a simple observation: brands were
                  struggling to create content that truly resonates. Generic
                  content wasn't cutting through the noise, and businesses
                  needed a partner who could help them tell their story in a way
                  that sparks genuine connections.
                </p>
                <p>
                  We founded Spark Media with a mission to bridge this gap. Our
                  team combines creative storytelling with strategic thinking to
                  create content that not only looks great but drives real
                  results for your business.
                </p>
                <p>
                  Today, we've helped over 250 brands transform their content
                  strategy, creating campaigns that have generated millions of
                  impressions and built lasting connections with audiences
                  worldwide.
                </p>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Our team at work"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`fade-in hover-lift glass rounded-xl p-8 text-center ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The talented individuals behind your digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="fade-in hover-lift glass rounded-xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center fade-in">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to ignite your brand's potential? At Spark Media, we're not
              just creating content; we're crafting sparks that connect with
              your audience and set your business ablaze with success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
