import React, { useEffect } from 'react';
import './service.css';

const ServicesPage = () => {
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.sp-service-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    serviceCards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(50px) scale(0.95)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease';
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: 'fas fa-chart-line',
      title: 'Digital Strategy',
      frontDesc: 'Comprehensive digital roadmaps for maximum market impact.',
      backDesc: 'Strategic approach to reach the right audience.',
      features: ['Market Analysis', 'Competitive Positioning', 'User Persona Development']
    },
    {
      id: 2,
      icon: 'fas fa-rocket',
      title: 'Growth Marketing',
      frontDesc: 'Data-driven campaigns to accelerate user acquisition.',
      backDesc: 'Cutting-edge growth strategies for software products.',
      features: ['User Acquisition Funnels', 'Conversion Optimization', 'Retention Strategies']
    },
    {
      id: 3,
      icon: 'fas fa-pen-fancy',
      title: 'Content Marketing',
      frontDesc: 'Compelling content that demonstrates your software\'s value.',
      backDesc: 'Content that resonates with your target audience.',
      features: ['Content Strategy', 'Blog & Article Creation', 'Video Content Production']
    },
    {
      id: 4,
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      frontDesc: 'Increase your software\'s visibility in search results.',
      backDesc: 'Optimize your digital presence to rank higher.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audit']
    },
    {
      id: 5,
      icon: 'fas fa-chart-pie',
      title: 'Data Analytics',
      frontDesc: 'Actionable insights from your marketing data.',
      backDesc: 'Turn data into decisions with comprehensive analytics.',
      features: ['Performance Tracking', 'KPI Development', 'Custom Dashboards']
    },
    {
      id: 6,
      icon: 'fas fa-hashtag',
      title: 'Social Media Marketing',
      frontDesc: 'Build community around your software.',
      backDesc: 'Social strategies that connect with your audience.',
      features: ['Platform Strategy', 'Content Calendar', 'Community Management']
    },
    {
      id: 7,
      icon: 'fas fa-ad',
      title: 'PPC Advertising',
      frontDesc: 'Targeted ads that drive conversions and growth.',
      backDesc: 'Maximize ROI with strategic paid advertising.',
      features: ['Campaign Management', 'Audience Targeting', 'ROI Optimization']
    },
    {
      id: 8,
      icon: 'fas fa-sync-alt',
      title: 'Conversion Optimization',
      frontDesc: 'Turn more visitors into loyal customers.',
      backDesc: 'Data-driven approaches to improve conversion rates.',
      features: ['A/B Testing', 'User Experience Analysis', 'Funnel Optimization']
    }
  ];

  return (
    <div className="sp-page">
      <div className="sp-container">
        
        <section className="sp-services">
          <div className="sp-section-title">
            <h2>Our Services</h2>
          </div>
          
          {/* <p className="sp-section-subtitle">
            We deliver cutting-edge marketing solutions that drive growth and maximize ROI for tech companies and SaaS products.
          </p> */}
          
          <div className="sp-services-container">
            {services.map(service => (
              <div className="sp-service-card" key={service.id}>
                <div className="sp-service-card-inner">
                  <div className="sp-service-card-front">
                    <div className="sp-service-icon"><i className={service.icon}></i></div>
                    <h3>{service.title}</h3>
                    <p>{service.frontDesc}</p>
                  </div>
                  <div className="sp-service-card-back">
                    <h3>{service.title}</h3>
                    <p>{service.backDesc}</p>
                    <ul className="sp-service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <a href="#" className="sp-btn">Learn More <i className="fas fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;