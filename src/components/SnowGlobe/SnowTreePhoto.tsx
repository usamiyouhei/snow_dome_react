// import treeImg from "../../assets/img/EXPO_tree.jpeg";

// import React from "react";

type Props = {
  src: string;
};

export default function SnowTreePhoto({ src }: Props) {
  console.log("SnowTreePhoto src:", src);

  return (
    <div className="tree-photo">
      <img src={src} alt="tree" className="tree-image" />
    </div>
  );
}
