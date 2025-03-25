import React from 'react';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    { name: 'Amit Sharma', specialty: 'Yoga Therapy', experience: '10 years' },
    { name: 'Priya Singh', specialty: 'Hatha Yoga', experience: '8 years' },
    { name: 'Rahul Verma', specialty: 'Ashtanga Yoga', experience: '6 years' },
    { name: 'Neha Kapoor', specialty: 'Meditation and Mindfulness', experience: '12 years' },
  ];

  return (
    <div className="trainers-container">
        {/* <div> */}
            <h2>Meet Our Expert Trainers</h2>
            <p>Our certified trainers bring years of experience to help you achieve your fitness goals with personalized guidance.</p>
            <div className="trainer-list">
                {trainers.map((trainer, index) => (
                <div key={index} className="trainer-card">
                    <h3>{trainer.name}</h3>
                    <p>Specialty: {trainer.specialty}</p>
                    <p>Experience: {trainer.experience}</p>
                </div>
                ))}
            </div>
      {/* </div> */}
    </div>
  );
};

export default Trainers;

