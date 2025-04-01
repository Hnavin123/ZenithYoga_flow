// import React from 'react';
// import './Classes.css'; 

// const Classes = () => {
//   return (
//     <div className="classes-container">
//       <div>
//         <h1>🧘 Our Yoga & Fitness Classes</h1>
//         <p>
//           Discover a variety of yoga and fitness classes designed for all skill levels.  
//           Whether you seek relaxation, strength building, or high-energy workouts,  
//           our expert instructors will guide you through the perfect routine to meet your goals.
//         </p>
        
//         <h2>🌿 Yoga Classes for Mind & Body</h2>
//         <ul>
//           <li> <strong>Hatha Yoga</strong> – Perfect for beginners, focusing on balance and flexibility.</li>
//           <li> <strong>Vinyasa Flow</strong> – A dynamic flow that connects movement with breath.</li>
//           <li> <strong>Kundalini Yoga</strong> – Awakening energy through breathwork and meditation.</li>
//           <li> <strong>Restorative Yoga</strong> – Deep relaxation and healing for body and mind.</li>
//           <li> <strong>Power Yoga</strong> – A more intense workout combining strength and endurance.</li>
//           <li> <strong>Yoga Nidra</strong> – A guided meditation practice for deep relaxation.</li>
//         </ul>

//         <h2>🏋️ Other Fitness & Wellness Classes</h2>
//         <ul>
//           <li> <strong>HIIT (High-Intensity Interval Training)</strong> – Quick and effective fat-burning workouts.</li>
//           <li> <strong>Indoor Cycling</strong> – Boost endurance with high-energy cycling sessions.</li>
//           <li> <strong>Boxing & Kickboxing</strong> – A powerful way to enhance cardio and strength.</li>
//           <li> <strong>Zumba & Dance Fitness</strong> – Fun, energetic workouts to keep you moving.</li>
//           <li> <strong>Strength Training</strong> – Build muscle and improve core strength.</li>
//           <li> <strong>Mindfulness & Meditation</strong> – Enhance mental clarity and inner peace.</li>
//         </ul>
        
//         <p>🌟 Join us and take your fitness and wellness journey to the next level!</p>
//       </div>
//     </div>
//   );
// };

// export default Classes;




// import React, { useState } from 'react';
// import './Classes.css'; // Import CSS for styling

// const Classes = () => {
//   // State for toggling sections
//   const [showYoga, setShowYoga] = useState(false);
//   const [showFitness, setShowFitness] = useState(false);

//   return (
//     <div className="classes-container">
//       <div className="classes-content">
//         <h1>🧘 Our Yoga & Fitness Classes</h1>
//         <p>
//           Discover a variety of yoga and fitness classes designed for all skill levels.  
//           Whether you seek relaxation, strength building, or high-energy workouts,  
//           our expert instructors will guide you through the perfect routine to meet your goals.
//         </p>

//         {/* Yoga Classes Section */}
//         <button className="toggle-button" onClick={() => setShowYoga(!showYoga)}>
//           {showYoga ? "Hide Yoga Classes" : "Show Yoga Classes"}
//         </button>
//         {showYoga && (
//           <div className="description-box">
//             <h2>🌿 Yoga Classes for Mind & Body</h2>
//             <ul>
//               <li> <strong>Hatha Yoga</strong> – Perfect for beginners, focusing on balance and flexibility.</li>
//               <li> <strong>Vinyasa Flow</strong> – A dynamic flow that connects movement with breath.</li>
//               <li> <strong>Kundalini Yoga</strong> – Awakening energy through breathwork and meditation.</li>
//               <li> <strong>Restorative Yoga</strong> – Deep relaxation and healing for body and mind.</li>
//               <li> <strong>Power Yoga</strong> – A more intense workout combining strength and endurance.</li>
//               <li> <strong>Yoga Nidra</strong> – A guided meditation practice for deep relaxation.</li>
//             </ul>
//           </div>
//         )}

//         {/* Fitness Classes Section */}
//         <button className="toggle-button" onClick={() => setShowFitness(!showFitness)}>
//           {showFitness ? "Hide Fitness Classes" : "Show Fitness Classes"}
//         </button>
//         {showFitness && (
//           <div className="description-box">
//             <h2>🏋️ Other Fitness & Wellness Classes</h2>
//             <ul>
//               <li> <strong>HIIT (High-Intensity Interval Training)</strong> – Quick and effective fat-burning workouts.</li>
//               <li> <strong>Indoor Cycling</strong> – Boost endurance with high-energy cycling sessions.</li>
//               <li> <strong>Boxing & Kickboxing</strong> – A powerful way to enhance cardio and strength.</li>
//               <li> <strong>Zumba & Dance Fitness</strong> – Fun, energetic workouts to keep you moving.</li>
//               <li> <strong>Strength Training</strong> – Build muscle and improve core strength.</li>
//               <li> <strong>Mindfulness & Meditation</strong> – Enhance mental clarity and inner peace.</li>
//             </ul>
//           </div>
//         )}

//         <p>🌟 Join us and take your fitness and wellness journey to the next level!</p>
//       </div>
//     </div>
//   );
// };

// export default Classes;




import React, { useState } from "react";
import YogaClasses from "./YogaClasses";
import FitnessClasses from "./FitnessClasses";
import MeditationClasses from "./MeditationClasses";
import CardioStrengthClasses from "./CardioStrengthClasses";
import DanceFunClasses from "./DanceFunClasses";
import "./Classes.css";

const Classes = () => {
  const [activeComponent, setActiveComponent] = useState("yoga");

  return (
    <div className="classes-container">
      <h1>🧘 Our Yoga & Fitness Classes</h1>
      <p>Explore our variety of wellness and fitness classes. Click below to learn more!</p>

      <div className="button-container">
        <button className="toggle-button" onClick={() => setActiveComponent("yoga")}>
          🌿 Yoga Classes
        </button>
        <button className="toggle-button" onClick={() => setActiveComponent("fitness")}>
          🏋️ Fitness & Wellness Classes
        </button>
        <button className="toggle-button" onClick={() => setActiveComponent("meditation")}>
          🧘‍♂️ Meditation Classes
        </button>
        <button className="toggle-button" onClick={() => setActiveComponent("cardio")}>
          💪 Cardio & Strength
        </button>
        <button className="toggle-button" onClick={() => setActiveComponent("dance")}>
          🎶 Dance & Fun Classes
        </button>
      </div>

      {/* Conditionally Render Components */}
      <div className="description-box">
        {activeComponent === "yoga" && <YogaClasses />}
        {activeComponent === "fitness" && <FitnessClasses />}
        {activeComponent === "meditation" && <MeditationClasses />}
        {activeComponent === "cardio" && <CardioStrengthClasses />}
        {activeComponent === "dance" && <DanceFunClasses />}
      </div>
    </div>
  );
};

export default Classes;
