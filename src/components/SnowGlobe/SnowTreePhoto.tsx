// import treeImg from "../../assets/img/EXPO_tree.jpeg";

// import React from "react";

type Props = {
  src: string;
};

export default function SnowTreePhoto({ src }: Props) {
  return (
    <div className="tree-photo">
      <img src={src} alt="tree" className="tree-image" />
    </div>
  );
}
