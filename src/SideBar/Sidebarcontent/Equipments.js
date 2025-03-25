import React from 'react';
import './Equipments.css';

const Equipment = () => {
  const equipmentList = [
    { name: 'Yoga Mat', description: 'Non-slip and comfortable mat for your yoga sessions.' },
    { name: 'Yoga Blocks', description: 'Provides support and helps with proper alignment.' },
    { name: 'Yoga Strap', description: 'Useful for deepening stretches and improving flexibility.' },
    { name: 'Meditation Cushion', description: 'Enhances comfort during meditation.' },
    { name: 'Yoga Wheel', description: 'Great for stretching and relieving muscle tension.' }
  ];

  return (
    <div className="equipment-container">
      <h2>Our Yoga Equipment</h2>
      <div className="equipment-list">
        {equipmentList.map((item, index) => (
          <div key={index} className="equipment-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;

