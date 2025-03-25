// import React from 'react';
// import './MeetExpertDitecians.css';

// const MeetExpertDieticians = () => {
//   const dieticians = [
//     { name: "Dr. Jane Doe", specialization: "Nutrition & Wellness", image: "path/to/jane.jpg" },
//     { name: "John Smith", specialization: "Plant-Based Diet", image: "path/to/john.jpg" },
//     { name: "Emily White", specialization: "Weight Management", image: "path/to/emily.jpg" }
//   ];

//   return (
//     <section className="meet-expert-dieticians">
//       <h2>Meet Our Expert Dieticians</h2>
//       <p>Our dieticians are here to guide you with personalized nutrition advice to enhance your yoga journey and overall well-being.</p>
//       <div className="dietician-list">
//         {dieticians.map((dietician, index) => (
//           <div className="dietician-card" key={index}>
//             <img src={dietician.image} alt={dietician.name} />
//             <h3>{dietician.name}</h3>
//             <p>{dietician.specialization}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MeetExpertDieticians;

import React from 'react';
import './Dietecians.css';

const Dieticians = () => {
  const MeetExpertDitecians = [
    { name: "Dr. Jane Doe", specialization: "Nutrition & Wellness", image: "path/to/jane.jpg" },
    { name: "John Smith", specialization: "Plant-Based Diet", image: "path/to/john.jpg" },
    { name: "Emily White", specialization: "Weight Management", image: "path/to/emily.jpg" }
  ];

  return (
    <section className="dieticians">
      <h2>Meet Our Expert Dieticians</h2>
      <p>Our dieticians are here to guide you with personalized nutrition advice to enhance your yoga journey and overall well-being.</p>
      <div className="dietician-list">
        {MeetExpertDitecians.map((dietician, index) => (
          <div className="dietician-card" key={index}>
            <img src={dietician.image} alt={dietician.name} />
            <h3>{dietician.name}</h3>
            <p>{dietician.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dieticians;

