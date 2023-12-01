import React, { useState } from "react";
import Button from "../../components/buttons/buttons.component";
import "./studio-section.style.scss";

const StudioSection = () => {
  const [started, setStarted] = useState(false);

  const Generateh1Text = () => {
    return started
      ? "Unleash Your Creative Vision with just text"
      : "Welcome to the Exclusive Design Studio Experience";
  };

  const GeneratepText = () => {
    return started
      ? "Embark on a journey of artistic expression and bring your unique ideas to life."
      : "Begin your creative journey by exploring the possibilities with our state-of-the-art Design Studio.";
  };

  const GenerateButtonText = () => {
    return started ? "Continue designing" : "Get started";
  };

  return (
    <div className="design-main-container">
      <h1>{Generateh1Text()}</h1>
      <h4>{GeneratepText()}</h4>
      <Button buttonType="inverted" onClick={() => setStarted(true)}>
        {GenerateButtonText()}
      </Button>
    </div>
  );
};

export default StudioSection;
