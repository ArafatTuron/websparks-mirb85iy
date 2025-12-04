import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Us',
      details: ['123 Innovation Street', 'Tech City, TC 12345']
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      details: ['hello@websparks.com', 'support@websparks.com']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-medium mb-6">
            <i className="bi bi-chat-dots-fill text-accent-500 mr-2"></i>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your digital vision into reality. We're here to answer your questions and provide expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-semibold text-primary-900 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <i className="bi bi-send-fill mr-2"></i>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-primary-900 mb-6">
                Get in touch with us
              </h3>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                We'd love to hear from you. Choose the most convenient way to reach out, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${info.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-secondary-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Ready to get started?</h4>
              <p className="mb-6 opacity-90">
                Schedule a free consultation to discuss your project requirements and get a personalized quote.
              </p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors duration-200">
                <i className="bi bi-calendar-check mr-2"></i>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
