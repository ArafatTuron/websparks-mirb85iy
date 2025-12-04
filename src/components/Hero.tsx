import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-200 to-primary-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-medium mb-6">
              <i className="bi bi-star-fill text-accent-500 mr-2"></i>
              Welcome to the Future of Digital Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-900 leading-tight mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Digital Vision
              </span>
              Into Reality
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We craft exceptional digital experiences that drive growth, engage audiences, and deliver measurable results for forward-thinking businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-glow">
                <i className="bi bi-rocket-takeoff mr-2"></i>
                Start Your Project
              </button>
              <button className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300">
                <i className="bi bi-play-circle mr-2"></i>
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900">500+</div>
                <div className="text-secondary-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900">98%</div>
                <div className="text-secondary-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900">24/7</div>
                <div className="text-secondary-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern workspace with digital solutions"
                crossOrigin="anonymous"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <i className="bi bi-graph-up-arrow text-white"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-900">Growth Rate</div>
                    <div className="text-xs text-secondary-600">+127% this month</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                    <i className="bi bi-people-fill text-white"></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-900">Active Users</div>
                    <div className="text-xs text-secondary-600">12.5K online now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
