// import React from "react";
import "./SnowGlobe.css";
import SnowParticles from "./SnowParticules";

const SnowGlobe = () => {
  return (
    <>
      <h1>✨ Merry Christmas ✨</h1>
      <input type="checkbox" id="toggle" className="check_box" />

      <div className="snowglobee-container">
        <div className="globe">
          {/* 粒子（雪＋ラメ） */}
          <SnowParticles />
          <div className="globe-inner"></div>
        </div>
      </div>
    </>
  );
};

export default SnowGlobe;
