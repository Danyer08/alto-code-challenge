import React from 'react';
import HeroImage from '../components/HeroImage';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroImage />
      <h1>Welcome to My Blog!</h1>
      <p>Check out my latest posts below.</p>
    </React.Fragment>
  );
};

export default HomePage;
