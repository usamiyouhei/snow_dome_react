import treeImg from "../../assets/img/tree.jpeg";

import React from "react";

const SnowTreePhoto = () => {
  return (
    <div className="tree-photo">
      <img src={treeImg} alt="tree" className="tree-image" />
    </div>
  );
};

export default SnowTreePhoto;
