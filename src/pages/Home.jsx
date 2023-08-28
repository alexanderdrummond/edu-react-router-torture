import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGoTo404 = () => {
    navigate("/totally-invalid-route");
  };

  const handleGoToProtected = () => {
    navigate("/protected");
  };

  return (
    <div className="page-container">
      <div className="home-content">
        <h2>Honestly.. This isn't my first choice</h2>
        <p>As a delusional Next.js user, I'm far too conditioned to the Next Router.</p>
        <p>
          In this module, I'll demonstrate some of the features React Router has. Press some of the links below to explore! 
        </p>
        <button className="home-button" onClick={handleGoTo404}>Go to an invalid route</button>
        <button className="home-button" onClick={handleGoToProtected}>Go to a protected page</button>
      </div>
    </div>
  );
};

export default Home;
