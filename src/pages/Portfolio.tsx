import { useEffect, useState } from "react";
import { ExternalLink, Award, TrendingUp, Users, Zap, X, Star, CheckCircle, Target } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "BrandSpark Content Strategy",
    category: "Content Creation",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Comprehensive content strategy that transformed brand storytelling and audience engagement.",
    fullDescription: "This comprehensive content strategy project involved a complete overhaul of BrandSpark's content approach. We developed a multi-channel content strategy that included blog posts, social media content, video scripts, and email marketing campaigns. The strategy focused on storytelling that resonates with their target audience while maintaining brand consistency across all platforms.",
    results: [
      "500% increase in engagement",
      "300% boost in followers",
      "Featured in Marketing Weekly",
    ],
    technologies: [
      "Content Planning",
      "Social Media",
      "Video Content",
      "Analytics",
      "SEO Optimization",
      "Email Marketing",
      "Brand Storytelling",
      "Audience Research"
    ],
    challenges: [
      "Inconsistent brand voice across platforms",
      "Low engagement rates",
      "Limited content variety",
      "Poor content performance tracking"
    ],
    solutions: [
      "Developed comprehensive brand voice guidelines",
      "Created engaging multi-format content strategy",
      "Implemented content calendar with diverse content types",
      "Set up advanced analytics and performance tracking"
    ],
    testimonial: {
      text: "Spark Media completely transformed our content strategy. The engagement rates have exceeded all our expectations.",
      author: "Jennifer Adams, Marketing Director at BrandSpark"
    },
    year: "2024",
    client: "BrandSpark Inc",
    link: "#",
  },
  {
    id: 2,
    title: "EcoGreen Social Campaign",
    category: "Social Media",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Comprehensive social media campaign promoting sustainable practices and eco-friendly lifestyle.",
    fullDescription: "EcoGreen's social media campaign was designed to raise awareness about sustainable living while building a community of environmentally conscious consumers. We created engaging content that educated audiences about eco-friendly practices, showcased sustainable products, and encouraged community participation in environmental initiatives.",
    results: [
      "1M+ social media impressions",
      "300% increase in organic traffic",
      "Award-winning campaign",
    ],
    technologies: [
      "Instagram",
      "TikTok",
      "Content Creation",
      "Influencer Marketing",
      "Community Management",
      "Paid Social Advertising",
      "User-Generated Content",
      "Social Analytics"
    ],
    challenges: [
      "Limited brand awareness in sustainability space",
      "Need to educate audience about eco-friendly practices",
      "Competition with established eco brands",
      "Creating engaging educational content"
    ],
    solutions: [
      "Developed educational content series",
      "Partnered with eco-influencers and activists",
      "Created interactive challenges and campaigns",
      "Implemented user-generated content strategy"
    ],
    testimonial: {
      text: "The campaign not only increased our visibility but also created a genuine community around our brand values.",
      author: "Mark Thompson, Founder of EcoGreen Solutions"
    },
    year: "2024",
    client: "EcoGreen Solutions",
    link: "#",
  },
  {
    id: 3,
    title: "LuxeLife Brand Content",
    category: "Branding",
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Luxury lifestyle brand content strategy with premium visual storytelling and exclusive content.",
    fullDescription: "LuxeLife required a sophisticated content strategy that would appeal to high-end consumers while maintaining an air of exclusivity. We developed premium visual content, curated lifestyle stories, and created exclusive experiences that positioned the brand as a leader in luxury lifestyle.",
    results: [
      "200% increase in brand awareness",
      "150% boost in engagement",
      "Industry recognition",
    ],
    technologies: [
      "Brand Strategy",
      "Photography",
      "Video Content",
      "Luxury Marketing",
      "Premium Content Creation",
      "Exclusive Event Marketing",
      "High-End Visual Design",
      "Influencer Partnerships"
    ],
    challenges: [
      "Appealing to discerning luxury consumers",
      "Maintaining exclusivity while growing audience",
      "Creating premium content consistently",
      "Differentiating from other luxury brands"
    ],
    solutions: [
      "Developed premium content standards and guidelines",
      "Created exclusive member-only content",
      "Implemented high-quality visual storytelling",
      "Established partnerships with luxury influencers"
    ],
    testimonial: {
      text: "Our brand now truly reflects the luxury experience we provide. The content strategy has elevated our entire brand presence.",
      author: "Sophia Martinez, Brand Manager at LuxeLife Brands"
    },
    year: "2023",
    client: "LuxeLife Brands",
    link: "#",
  },
  {
    id: 4,
    title: "FitFlow Campaign Management",
    category: "Campaign Management",
    image:
      "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Multi-platform fitness campaign with workout content, nutrition tips, and community building.",
    fullDescription: "FitFlow's campaign focused on building a comprehensive fitness community through engaging workout content, nutritional guidance, and motivational storytelling. We created a multi-platform approach that included workout videos, meal planning content, success stories, and interactive challenges to keep the community engaged and motivated.",
    results: [
      "300% increase in members",
      "250% growth in engagement",
      "Fitness industry award",
    ],
    technologies: [
      "Campaign Strategy",
      "Video Content",
      "Community Management",
      "Influencer Partnerships",
      "Fitness App Integration",
      "Live Streaming",
      "Challenge Creation",
      "Performance Tracking"
    ],
    challenges: [
      "Saturated fitness market competition",
      "Maintaining member motivation and engagement",
      "Creating diverse content for different fitness levels",
      "Building authentic community connections"
    ],
    solutions: [
      "Developed personalized content for different fitness levels",
      "Created interactive challenges and competitions",
      "Implemented community features and member spotlights",
      "Partnered with certified fitness professionals"
    ],
    testimonial: {
      text: "The campaign transformed our fitness community. Members are more engaged and motivated than ever before.",
      author: "Alex Johnson, CEO of FitFlow Wellness"
    },
    year: "2023",
    client: "FitFlow Wellness",
    link: "#",
  },
  {
    id: 5,
    title: "TechStart Content Hub",
    category: "Content Creation",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Comprehensive content hub with technical articles, tutorials, and thought leadership content.",
    fullDescription: "TechStart needed to establish thought leadership in the competitive tech industry. We created a comprehensive content hub featuring in-depth technical articles, step-by-step tutorials, industry insights, and expert interviews. The content strategy positioned TechStart as a go-to resource for technical knowledge and innovation.",
    results: [
      "500+ content pieces",
      "400% increase in traffic",
      "Featured in Tech Weekly",
    ],
    technologies: [
      "Technical Writing",
      "Blog Content",
      "Video Tutorials",
      "SEO Content",
      "Infographic Design",
      "Podcast Production",
      "Webinar Creation",
      "Content Management System"
    ],
    challenges: [
      "Complex technical topics needed simplification",
      "Establishing authority in competitive tech space",
      "Creating content for diverse technical skill levels",
      "Maintaining consistent publishing schedule"
    ],
    solutions: [
      "Developed content for multiple skill levels",
      "Created comprehensive editorial calendar",
      "Implemented expert review process",
      "Established thought leadership through industry insights"
    ],
    testimonial: {
      text: "Our content hub has become the go-to resource in our industry. The quality and depth of content is unmatched.",
      author: "Rachel Kim, CTO of TechStart Solutions"
    },
    year: "2023",
    client: "TechStart Solutions",
    link: "#",
  },
  {
    id: 6,
    title: "RetailMax Social Growth",
    category: "Social Media",
    image:
      "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Multi-platform social media strategy that transformed a local retailer into a viral brand.",
    fullDescription: "RetailMax was a local retailer looking to expand their reach through social media. We developed a viral marketing strategy that included trending content creation, community engagement, influencer collaborations, and strategic hashtag campaigns. The approach transformed them from a local business into a nationally recognized brand.",
    results: [
      "400% increase in followers",
      "250% growth in engagement",
      "Viral content success",
    ],
    technologies: [
      "Instagram",
      "TikTok", 
      "Facebook",
      "Viral Marketing",
      "Hashtag Strategy",
      "Trend Analysis",
      "Content Scheduling",
      "Social Media Analytics"
    ],
    challenges: [
      "Limited brand recognition beyond local market",
      "Need to create viral-worthy content consistently",
      "Competition with established retail brands",
      "Building authentic online community"
    ],
    solutions: [
      "Developed viral content creation framework",
      "Implemented trend-based content strategy",
      "Created authentic brand personality",
      "Established community engagement protocols"
    ],
    testimonial: {
      text: "We went from a local store to a viral sensation. Our social media presence has completely transformed our business.",
      author: "Maria Rodriguez, Owner of RetailMax Corp"
    },
    year: "2023",
    client: "RetailMax Corp",
    link: "#",
  },
];

const achievements = [
  {
    icon: Award,
    title: "15+ Content Awards",
    description:
      "Recognized for excellence in content creation and creative storytelling",
  },
  {
    icon: TrendingUp,
    title: "10M+ Impressions Generated",
    description:
      "Helped brands achieve massive reach and engagement across platforms",
  },
  {
    icon: Users,
    title: "250+ Satisfied Clients",
    description: "Building lasting partnerships with brands worldwide",
  },
  {
    icon: Zap,
    title: "93% Client Satisfaction",
    description:
      "Consistent delivery of content that exceeds brand expectations",
  },
];

const categories = [
  "All",
  "Content Creation",
  "Social Media",
  "Branding",
  "Campaign Management",
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllTechnologies, setShowAllTechnologies] = useState<{[key: number]: boolean}>({});

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

  // Filter items based on active category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category.trim().toLowerCase() ===
            activeCategory.trim().toLowerCase()
        );

  const toggleTechnologies = (itemId: number) => {
    setShowAllTechnologies(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const selectedPortfolioItem = portfolioItems.find(item => item.id === selectedItem);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Portfolio Showcase</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Content <span className="gradient-text">Masterpieces</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover award-winning content campaigns that showcase our
              expertise in content creation, social media management, and brand
              storytelling across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center fade-in hover-lift glass rounded-xl p-6"
              >
                <achievement.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold gradient-text mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.length === 0 ? (
              <div className="col-span-3 text-center text-gray-400">
                No portfolio items found for this category.
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="fade-in hover-lift glass rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-xs font-medium mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200 mb-3">
                          {item.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSelectedItem(item.id)}
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View Details
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {item.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-xs text-green-400">
                            • {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {(showAllTechnologies[item.id] ? item.technologies : item.technologies.slice(0, 3)).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <button
                            type="button"
                            onClick={() => toggleTechnologies(item.id)}
                            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
                          >
                            {showAllTechnologies[item.id] 
                              ? 'Show Less' 
                              : `+${item.technologies.length - 3} more`
                            }
                          </button>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedItem(item.id)}
                      className="w-full bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Modal for Portfolio Details */}
      {selectedPortfolioItem && (
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
                src={selectedPortfolioItem.image}
                alt={selectedPortfolioItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-16">
                <span className="inline-block px-3 py-1 bg-blue-500 rounded-full text-xs font-medium mb-2 text-white">
                  {selectedPortfolioItem.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedPortfolioItem.title}
                </h2>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span>{selectedPortfolioItem.client}</span>
                  <span>{selectedPortfolioItem.year}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Results Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {selectedPortfolioItem.results.map((result, idx) => (
                  <div key={idx} className="text-center glass rounded-lg p-4">
                    <div className="text-lg font-bold text-green-400 mb-1">
                      {result}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {selectedPortfolioItem.fullDescription}
                </p>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-4">Challenges</h4>
                  <ul className="space-y-2">
                    {selectedPortfolioItem.challenges.map((challenge, idx) => (
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
                    {selectedPortfolioItem.solutions.map((solution, idx) => (
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
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Technologies & Services Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPortfolioItem.technologies.map((tech, idx) => (
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
                  "{selectedPortfolioItem.testimonial.text}"
                </blockquote>
                <cite className="text-blue-400 font-medium">
                  — {selectedPortfolioItem.testimonial.author}
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

      {/* CTA Section */}
      <section className="section bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Content That{" "}
              <span className="gradient-text">Sparks</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create content that not only meets your goals
              but becomes a showcase of creative excellence that makes your
              brand shine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="/projects" className="btn-secondary">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;