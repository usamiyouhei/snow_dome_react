// import React from "react";
import "./SnowGlobe.css";
import SnowParticles from "./SnowParticules";
import SnowTree from "./SnowTree";
import SnowGlobeBase from "./SnowGlobeBase";
import SnowTreePhoto from "./SnowTreePhoto";
import { useState } from "react";
// import { treePhotos } from "./TreePhotos";
import { treeTabs } from "./treeTabs";
import type { TreeTab } from "./treeTabs";

const SnowGlobe = () => {
  const [active, setActive] = useState<TreeTab>(treeTabs[0]);

  return (
    <>
      <h1>✨ Merry Christmas ✨</h1>
      <div className="tabs">
        {treeTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${active.id === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <input type="checkbox" id="toggle" className="check_box" />

      <div className="snowglobe-container">
        <div className="globe">
          {/* 粒子（雪＋ラメ） */}
          <SnowParticles />
          <div className="tree-layer is-active" key={active.id}>
            {active.type === "css" && <SnowTree />}
            {active.type === "photo" && <SnowTreePhoto src={active.src} />}
          </div>
          <div className="globe-inner" />
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
