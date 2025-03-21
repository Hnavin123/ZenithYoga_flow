
import React from 'react';
import './Offers.css';
const OfferDetails = () => {
  const offers = [
    {
      title: 'New Year Special Offer',
      description: 'Get 20% off on all yoga classes for the first 3 months!',
      validity: 'Valid until January 31st',
    },
    {
      title: 'Refer a Friend',
      description: 'Refer a friend and both get 10% off on your next renewal.',
      validity: 'Ongoing Offer',
    },
    {
      title: 'Student Discount',
      description: 'Students get 15% off on all yoga packages.',
      validity: 'Valid with student ID',
    },
  ];

  return (
    <div className="offer-details-container">
        <div>
            <h2>Our Special Offers</h2>
            {offers.map((offer, index) => (
                <div key={index} className="offer-card">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <span>{offer.validity}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default OfferDetails;
