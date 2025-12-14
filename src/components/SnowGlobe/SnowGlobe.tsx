// import React from "react";
import "./SnowGlobe.css";
import SnowParticles from "./SnowParticules";
// import SnowTree from "./SnowTree";
import SnowGlobeBase from "./SnowGlobeBase";
import SnowTreePhoto from "./SnowTreePhoto";
import { useState } from "react";
import { treePhotos } from "./TreePhotos";

const SnowGlobe = () => {
  const [active, setActive] = useState(treePhotos[0]);

  return (
    <>
      <h1>✨ Merry Christmas ✨</h1>
      <div className="tabs">
        {treePhotos.map((t) => (
          <button
            key={t.id}
            className={`tab ${active.id === t.id ? "active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t.label}
          </button>
        ))}
      </div>
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
          <div className="tree-layer is-active">
            <SnowTreePhoto src={active.src} />
          </div>

          {/* <div className={`tree-layer ${mode === "photo" ? "is-active" : ""}`}>
            <SnowTree />
          </div> */}
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
