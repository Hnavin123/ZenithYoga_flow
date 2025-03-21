import React from 'react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    title: 'Experienced Instructors',
    description: 'Our certified yoga instructors have years of experience and are passionate about helping you achieve your fitness goals.',
    icon: '💪', 
  },
  {
    id: 2,
    title: 'Variety of Classes',
    description: 'We offer a wide range of yoga styles, including Hatha, Vinyasa, Power Yoga, and more to suit your needs.',
    icon: '🧘‍♀️',
  },
  {
    id: 3,
    title: 'Calming Environment',
    description: 'Our studio is designed to provide a peaceful and calming atmosphere for your practice, with soothing music and natural light.',
    icon: '🌿',
  },
  {
    id: 4,
    title: 'Flexible Schedule',
    description: 'With classes offered throughout the day, you can easily find a time that fits your schedule.',
    icon: '⏰',
  },
];

const Features = () => {
  return (
    <div className="features-container">
      <div>  
            <h2>Why Choose Us</h2>
            <div className="features-list">
                {featuresData.map((feature) => (
                <div key={feature.id} className="feature-item">
                    <div className="feature-icon">
                    <span role="img" aria-label={feature.title}>
                        {feature.icon}
                    </span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
                ))}
            </div>
      </div>
    </div>
  );
};

export default Features;
