import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'bi-code-slash',
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers and create memorable brand experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: 'bi-phone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'React Native', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: 'bi-cloud-arrow-up',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern, high-performance applications.',
      features: ['AWS & Azure', 'DevOps', 'Auto Scaling', 'Security & Monitoring']
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility, engagement, and conversion rates.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      icon: 'bi-shield-check',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-medium mb-6">
            <i className="bi bi-gear-fill text-accent-500 mr-2"></i>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital services that transform your business and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100 hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-primary-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-700">
                    <i className="bi bi-check-circle-fill text-accent-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                Learn More <i className="bi bi-arrow-right ml-1"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
