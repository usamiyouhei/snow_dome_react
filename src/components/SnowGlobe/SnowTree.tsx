import treeImg from "../../assets/img/tree.jpeg";

export default function SnowTree() {
  return (
    <div className="tree-container">
      {/* <div className="star">⭐</div>
      <div className="tree"></div> */}
      <img src={treeImg} alt="tree" className="tree-image" />
    </div>
  );
}
