import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      skills: ['React', 'Node.js', 'AWS']
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      skills: ['Figma', 'Adobe XD', 'Prototyping']
    },
    {
      name: 'Mike Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      skills: ['Docker', 'Kubernetes', 'CI/CD']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-medium mb-6">
              <i className="bi bi-people-fill text-accent-500 mr-2"></i>
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-6">
              Passionate Innovators Driving Digital Excellence
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              We are a team of dedicated professionals who believe in the power of technology to transform businesses. 
              With years of experience and a passion for innovation, we deliver solutions that exceed expectations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                  <i className="bi bi-lightbulb-fill text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Innovation First</h4>
                  <p className="text-secondary-600">We stay ahead of technology trends to deliver cutting-edge solutions.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mr-4">
                  <i className="bi bi-heart-fill text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Client-Centric</h4>
                  <p className="text-secondary-600">Your success is our priority. We build lasting partnerships.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration"
              crossOrigin="anonymous"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-900 mb-2">{stat.number}</div>
              <div className="text-secondary-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-900 mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life with expertise and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  crossOrigin="anonymous"
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-full w-24 h-24 mx-auto"></div>
              </div>
              <h4 className="text-xl font-semibold text-primary-900 mb-2">{member.name}</h4>
              <p className="text-accent-600 font-medium mb-4">{member.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
