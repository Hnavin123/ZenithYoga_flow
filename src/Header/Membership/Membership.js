import React, { useState } from "react";
import "./Membership.css"; // Import CSS for styling

const Membership = () => {
  return (
    <div className="membership-container">
      <div>
        <h1>Membership Plans</h1>
        <p>Choose the best membership plan that suits your fitness goals.</p>

        <div className="membership-plans">
          <div className="plan">
            <h2>Basic Plan</h2>
            <p>💰 $19.99/month</p>
            <p>✅ Access to gym equipment</p>
            <p>✅ Locker room access</p>
            <p>❌ No personal training</p>
            <button>Join Now</button>
          </div>

          <div className="plan">
            <h2>Standard Plan</h2>
            <p>💰 $39.99/month</p>
            <p>✅ Everything in Basic Plan</p>
            <p>✅ Group fitness classes</p>
            <p>✅ One personal training session per month</p>
            <button>Join Now</button>
          </div>

          <div className="plan">
            <h2>Premium Plan</h2>
            <p>💰 $59.99/month</p>
            <p>✅ Everything in Standard Plan</p>
            <p>✅ Unlimited personal training</p>
            <p>✅ Nutrition consultation</p>
            <button>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
