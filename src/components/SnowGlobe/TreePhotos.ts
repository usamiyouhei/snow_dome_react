import EXPOTreeImg from "../../assets/img/EXPO_tree.jpeg";
import jumeirahTreeImg from "../../assets/img/jumeirah.jpg";
import jumeirahSantaImg from "../../assets/img/jumeirah_santa.JPG";

export type TreePhoto = {
  id: string;
  label: string;
  src: string;
};
export const treePhotos = [
  {
    id: "EXPO_tree",
    label: "EXPO Tree🌲",
    src: EXPOTreeImg,
  },
  {
    id: "jumeirahTree",
    label: "Jumeirah Tree🌲",
    src: jumeirahTreeImg,
  },
  {
    id: "jumeirah_Santa",
    label: "Jumeirah Santa🎅",
    src: jumeirahSantaImg,
  },
];
