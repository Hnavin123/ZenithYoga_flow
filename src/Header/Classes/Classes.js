import React from 'react';
import './Classes.css'; // Import CSS for styling

const Classes = () => {
  return (
    <div className="classes-container">
      <h1>Our Classes</h1>
      <p>
        Explore our diverse range of fitness classes designed for all skill levels.  
        Whether you are looking for strength training, cardio workouts, or yoga  
        sessions, we have the perfect class for you.
      </p>
      
      <ul>
        <li>🏋️ Strength Training</li>
        <li>🔥 HIIT (High-Intensity Interval Training)</li>
        <li>🧘 Yoga & Meditation</li>
        <li>🚴 Indoor Cycling</li>
        <li>🥊 Boxing & Kickboxing</li>
        <li>💃 Zumba & Dance Fitness</li>
      </ul>
      
      <p>Join us and take your fitness journey to the next level!</p>
    </div>
  );
};

export default Classes;
