// import React from "react";
import "./SnowGlobe.css";
import SnowParticles from "./SnowParticules";
import SnowTree from "./SnowTree";
import SnowGlobeBase from "./SnowGlobeBase";
import SnowTreePhoto from "./SnowTreePhoto";
import { useState } from "react";

const SnowGlobe = () => {
  const [mode, setMode] = useState<"photo" | "css">("photo");

  return (
    <>
      <h1>✨ Merry Christmas ✨</h1>
      <button
        className="tree-toggle"
        onClick={() => setMode(mode === "photo" ? "css" : "photo")}
      >
        {mode === "photo" ? "CSS Tree" : "Photo Tree"}
      </button>
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
          <div className={`tree-layer ${mode === "css" ? "is-active" : ""}`}>
            <SnowTreePhoto />
          </div>

          <div className={`tree-layer ${mode === "photo" ? "is-active" : ""}`}>
            <SnowTree />
          </div>
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
