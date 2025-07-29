import { useEffect, useState } from "react";
import {
  ExternalLink,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Award,
  X,
  CheckCircle,
  Star,
} from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "TechStart Inc. Digital Transformation",
    category: "digital-marketing",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    client: "TechStart Inc.",
    duration: "6 months",
    results: {
      traffic: "+400%",
      conversions: "+350%",
      revenue: "+$2.5M",
    },
    description:
      "Complete digital marketing overhaul including SEO, PPC, and social media strategy that transformed a struggling startup into a market leader.",
    fullDescription: "This comprehensive digital transformation project involved a complete overhaul of TechStart Inc.'s online presence. We implemented advanced SEO strategies, launched targeted PPC campaigns across Google and social media platforms, and developed a cohesive content marketing strategy. The project included website redesign, conversion rate optimization, and implementation of advanced analytics tracking. Our team worked closely with their internal marketing team to ensure knowledge transfer and long-term success.",
    technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
    challenges: [
      "Low organic search visibility",
      "Poor conversion rates",
      "Inconsistent brand messaging",
      "Limited social media presence"
    ],
    solutions: [
      "Comprehensive SEO audit and optimization",
      "Landing page redesign and A/B testing",
      "Brand messaging standardization",
      "Multi-platform social media strategy"
    ],
    testimonial: {
      text: "Spark Media transformed our entire digital presence. The results exceeded our expectations and helped us become a market leader.",
      author: "John Smith, CEO of TechStart Inc."
    },
    link: "#",
  },
  {
    id: 2,
    title: "EcoSolutions E-commerce Platform",
    category: "web-development",
    image:
      "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    client: "EcoSolutions",
    duration: "4 months",
    results: {
      sales: "+280%",
      users: "+150%",
      conversion: "+45%",
    },
    description:
      "Custom e-commerce platform with advanced features including AI-powered recommendations and seamless payment integration.",
    fullDescription: "We developed a cutting-edge e-commerce platform for EcoSolutions that revolutionized their online sales process. The platform features AI-powered product recommendations, advanced inventory management, multi-payment gateway integration, and responsive design optimized for all devices. We also implemented advanced analytics, customer segmentation tools, and automated email marketing integration.",
    technologies: ["React", "Node.js", "Stripe", "AWS"],
    challenges: [
      "Outdated e-commerce system",
      "Poor mobile experience",
      "Limited payment options",
      "No personalization features"
    ],
    solutions: [
      "Modern React-based frontend",
      "Mobile-first responsive design",
      "Multiple payment gateway integration",
      "AI-powered recommendation engine"
    ],
    testimonial: {
      text: "The new platform has completely transformed our business. Sales have increased dramatically and customer satisfaction is at an all-time high.",
      author: "Sarah Johnson, Founder of EcoSolutions"
    },
    link: "#",
  },
  {
    id: 3,
    title: "GrowthCorp Brand Redesign",
    category: "branding",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    client: "GrowthCorp",
    duration: "3 months",
    results: {
      awareness: "+200%",
      engagement: "+180%",
      leads: "+120%",
    },
    description:
      "Complete brand identity redesign including logo, website, and marketing materials that increased brand recognition significantly.",
    fullDescription: "GrowthCorp needed a complete brand transformation to compete in the modern marketplace. We conducted extensive market research, competitor analysis, and customer surveys to develop a new brand identity that resonates with their target audience. The project included logo design, color palette development, typography selection, brand guidelines creation, website redesign, and marketing collateral development.",
    technologies: ["Adobe Creative Suite", "Figma", "Webflow"],
    challenges: [
      "Outdated brand identity",
      "Poor brand recognition",
      "Inconsistent messaging",
      "Low market differentiation"
    ],
    solutions: [
      "Modern, memorable logo design",
      "Comprehensive brand guidelines",
      "Consistent visual identity system",
      "Unique brand positioning strategy"
    ],
    testimonial: {
      text: "Our new brand identity has given us a competitive edge. We're now recognized as a leader in our industry.",
      author: "Michael Chen, Marketing Director at GrowthCorp"
    },
    link: "#",
  },
  {
    id: 4,
    title: "FinanceFlow Mobile App",
    category: "mobile-development",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    client: "FinanceFlow",
    duration: "8 months",
    results: {
      downloads: "100K+",
      rating: "4.8/5",
      retention: "85%",
    },
    description:
      "Comprehensive financial management mobile app with advanced analytics and AI-powered insights.",
    fullDescription: "FinanceFlow required a sophisticated mobile application to help users manage their finances effectively. We developed a comprehensive solution featuring expense tracking, budget planning, investment monitoring, bill reminders, and AI-powered financial insights. The app includes bank integration, secure authentication, real-time notifications, and detailed financial reporting capabilities.",
    technologies: ["React Native", "Firebase", "Machine Learning"],
    challenges: [
      "Complex financial data integration",
      "Security and privacy concerns",
      "Cross-platform compatibility",
      "User experience optimization"
    ],
    solutions: [
      "Secure API integrations with banks",
      "End-to-end encryption implementation",
      "React Native for cross-platform development",
      "Intuitive UI/UX design"
    ],
    testimonial: {
      text: "The app has revolutionized how our users manage their finances. The AI insights are particularly impressive.",
      author: "Emily Rodriguez, Product Manager at FinanceFlow"
    },
    link: "#",
  },
  {
    id: 5,
    title: "RetailMax Social Media Campaign",
    category: "social-media",
    image:
      "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    client: "RetailMax",
    duration: "12 months",
    results: {
      followers: "+500K",
      engagement: "+300%",
      sales: "+180%",
    },
    description:
      "Multi-platform social media strategy that built a massive engaged community and drove significant sales growth.",
    fullDescription: "RetailMax needed to establish a strong social media presence to compete with larger retailers. We developed a comprehensive social media strategy spanning Instagram, TikTok, Facebook, and Twitter. The campaign included content creation, influencer partnerships, community management, paid advertising, and performance analytics. We created viral content that significantly increased brand awareness and drove substantial sales growth.",
    technologies: ["Instagram", "TikTok", "Facebook", "Content Creation"],
    challenges: [
      "Limited social media presence",
      "Low brand awareness",
      "Competition with larger retailers",
      "Need for viral content creation"
    ],
    solutions: [
      "Multi-platform content strategy",
      "Influencer partnership program",
      "Viral content creation techniques",
      "Community engagement initiatives"
    ],
    testimonial: {
      text: "Our social media presence has exploded thanks to Spark Media. We've become a household name in our industry.",
      author: "David Wilson, CEO of RetailMax"
    },
    link: "#",
  },
  {
    id: 6,
    title: "HealthCare Plus SEO Domination",
    category: "seo",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    client: "HealthCare Plus",
    duration: "10 months",
    results: {
      rankings: "Top 3",
      traffic: "+600%",
      leads: "+400%",
    },
    description:
      "Comprehensive SEO strategy that dominated local and national search results for competitive healthcare keywords.",
    fullDescription: "HealthCare Plus faced intense competition in the healthcare industry and needed to improve their search engine visibility. We implemented a comprehensive SEO strategy including technical SEO optimization, content marketing, local SEO, link building, and reputation management. The project involved extensive keyword research, competitor analysis, and ongoing optimization to achieve top rankings for highly competitive healthcare terms.",
    technologies: ["Technical SEO", "Content Marketing", "Link Building"],
    challenges: [
      "Highly competitive healthcare market",
      "Poor search engine visibility",
      "Limited organic traffic",
      "Need for local SEO optimization"
    ],
    solutions: [
      "Comprehensive technical SEO audit",
      "High-quality content creation strategy",
      "Strategic link building campaign",
      "Local SEO optimization"
    ],
    testimonial: {
      text: "We now dominate search results in our area. The increase in qualified leads has been phenomenal.",
      author: "Dr. Lisa Thompson, Director at HealthCare Plus"
    },
    link: "#",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "web-development", label: "Web Development" },
  { id: "branding", label: "Branding" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "social-media", label: "Social Media" },
  { id: "seo", label: "SEO" },
];

// Type for a project (for TypeScript)
type ProjectType = (typeof projects)[number];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

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

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Our Projects</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful digital marketing campaigns
              and development projects that have transformed businesses and
              delivered exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="fade-in hover-lift glass rounded-xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <button 
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.client}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-green-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="w-full bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Case Study
                    <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-16">
                <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-xs font-medium mb-2 text-white">
                  {categories.find(cat => cat.id === selectedProject.category)?.label}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {selectedProject.client}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedProject.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Results Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {Object.entries(selectedProject.results).map(([key, value]) => (
                  <div key={key} className="text-center glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-4">Challenges</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <Target className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Solutions</h4>
                  <ul className="space-y-2">
                    {selectedProject.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="glass rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic mb-4 text-lg">
                  "{selectedProject.testimonial.text}"
                </blockquote>
                <cite className="text-blue-400 font-medium">
                  — {selectedProject.testimonial.author}
                </cite>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Similar Project
                </button>
                <button
                  type="button"
                  className="flex-1 bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  onClick={closeModal}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Project <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The measurable results we've achieved across all our projects
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Clients Served", icon: Users },
              { number: "1000+", label: "Campaigns Launched", icon: Target },
              {
                number: "500%",
                label: "Average ROI Increase",
                icon: TrendingUp,
              },
              { number: "93%", label: "Client Satisfaction", icon: Award },
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Content That{" "}
              <span className="gradient-text">Makes an Impact</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create content that delivers exceptional results and
              transforms your brand's digital presence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="/portfolio" className="btn-secondary">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;