// import React from "react";
import "./SnowGlobe.css";
import SnowParticles from "./SnowParticules";
import SnowTree from "./SnowTree";
import SnowGlobeBase from "./SnowGlobeBase";

const SnowGlobe = () => {
  return (
    <>
      <h1>✨ Merry Christmas ✨</h1>
      <input type="checkbox" id="toggle" className="check_box" />

      <div className="snowglobe-container">
        <div className="globe">
          {/* 粒子（雪＋ラメ） */}
          <SnowParticles />
          <div className="globe-inner"></div>
          {/* ロゴ */}
          {/* <img
            src="http://tsurupiyoblog.com/wp-content/uploads/2025/11/chrisumasu_logo.png"
            alt="Logo"
            className="logo"
          /> */}
          {/* tree */}
          <SnowTree />
        </div>
        {/* ガラス層 */}
        <div className="glass-layer"></div>

        {/* 土台 */}
        <SnowGlobeBase />
      </div>
    </>
  );
};

export default SnowGlobe;
