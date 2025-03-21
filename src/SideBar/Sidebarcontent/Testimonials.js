import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This yoga studio has changed my life! Highly recommended.',
    },
    {
      name: 'Jane Smith',
      feedback: 'The instructors are amazing and the classes are so relaxing.',
    },
    {
      name: 'Emily Johnson',
      feedback: 'A great place to improve both body and mind.',
    },
  ];

  return (
    <div className="testimonials-container">
        <div>
            <h2>What Our Clients Say</h2>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}</h4>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonials;
