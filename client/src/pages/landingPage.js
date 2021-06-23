import React from "react";

function LandingPage(props) {
  
  function handleButtonClick(event) {
    event.preventDefault();

  }

  return (
    <div>
      <button
        onClick={handleButtonClick}
      >
        test
      </button>
    </div>
  );
}

export default LandingPage;
