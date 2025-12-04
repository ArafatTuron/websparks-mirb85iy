import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    Services: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Cloud Solutions'],
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  const socialLinks = [
    { icon: 'bi-facebook', href: '#', label: 'Facebook' },
    { icon: 'bi-twitter', href: '#', label: 'Twitter' },
    { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'bi-instagram', href: '#', label: 'Instagram' },
    { icon: 'bi-github', href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent-400/5 to-primary-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-primary-700/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </h3>
            <p className="text-lg text-secondary-300 max-w-2xl mx-auto">
              Get exclusive insights, industry trends, and expert tips delivered straight to your inbox.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-transparent text-white placeholder-secondary-300 focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                <i className="bi bi-send-fill mr-2"></i>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="bi bi-lightning-charge-fill text-white text-2xl"></i>
                </div>
                <div>
                  <span className="text-3xl font-heading font-bold">WebSparks</span>
                  <div className="text-accent-400 text-sm font-medium">Digital Innovation</div>
                </div>
              </div>
              
              <p className="text-secondary-300 mb-8 leading-relaxed text-lg max-w-lg">
                Transforming digital visions into reality with innovative solutions, exceptional design, and cutting-edge technology that drives business growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-800/50 rounded-lg flex items-center justify-center">
                    <i className="bi bi-geo-alt-fill text-accent-400"></i>
                  </div>
                  <span className="text-secondary-300">123 Innovation Street, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-800/50 rounded-lg flex items-center justify-center">
                    <i className="bi bi-telephone-fill text-accent-400"></i>
                  </div>
                  <span className="text-secondary-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-800/50 rounded-lg flex items-center justify-center">
                    <i className="bi bi-envelope-fill text-accent-400"></i>
                  </div>
                  <span className="text-secondary-300">hello@websparks.com</span>
                </div>
              </div>

              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gradient-to-br from-primary-800/80 to-primary-700/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-accent-500 hover:to-primary-500 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-accent-400/50"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category} className="space-y-6">
                    <h4 className="font-heading font-semibold text-xl text-white relative">
                      {category}
                      <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
                    </h4>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-secondary-300 hover:text-accent-400 transition-all duration-200 flex items-center group"
                          >
                            <i className="bi bi-arrow-right text-xs opacity-0 group-hover:opacity-100 mr-2 transition-all duration-200 transform group-hover:translate-x-1"></i>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-secondary-300">
              <div className="flex items-center space-x-2">
                <i className="bi bi-c-circle text-accent-400"></i>
                <span>2024 WebSparks. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="hover:text-accent-400 transition-colors duration-200">Privacy Policy</a>
                <span className="text-primary-600">•</span>
                <a href="#" className="hover:text-accent-400 transition-colors duration-200">Terms of Service</a>
                <span className="text-primary-600">•</span>
                <a href="#" className="hover:text-accent-400 transition-colors duration-200">Cookies</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-gradient-to-r from-primary-800/50 to-accent-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                <i className="bi bi-robot text-white text-sm"></i>
              </div>
              <span className="text-secondary-300 text-sm">
                Powered by <span className="text-accent-400 font-semibold">Websparks AI</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
