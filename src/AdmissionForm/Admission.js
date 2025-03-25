// import React from 'react'


// function Admission() {
//   return (
//     <div className='form'>
//         <div>Admission</div>
        
//     </div>
//   )
// }

// export default Admission;

import React from 'react';
import './Admission.css';
const Admission = () => {
  return (
    <div className='admission-container'>
      <div>
          <h2> Admission Form</h2>
          <form>
            <label>
              Name: <input type="text" name="name" />
            </label>
            <br />
            <label>
              Age: <input type="number" name="age" />
            </label>
            <br />
            <label>
              Gender: 
              <select name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <label>
              Contact Number: <input type="tel" name="contact" />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
};

export default Admission;

