import { useEffect } from "react";

export default function SnowParticles() {
  useEffect(() => {
    const c = document.getElementById("pc");
    if (!c) return;

    const anims = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"];
    const colors = ["g", "b", "k", "w"];

    // 雪 160個
    for (let i = 0; i < 160; i++) {
      const d = document.createElement("div");
      const size = 2 + Math.random() * 4;
      const left = 8 + Math.random() * 84;
      const bottom = 10 + Math.random() * 25;
      const anim = anims[Math.floor(Math.random() * anims.length)];
      const dur = 11 + Math.random() * 6;
      const delay = Math.random() * 6;
      d.className = "p s";
      d.style.cssText = `
        width:${size}px;height:${size}px;
        left:${left}%;bottom:${bottom}px;
        animation:${anim} ${dur}s ease-in-out ${delay}s infinite;
      `;
      c.appendChild(d);
    }

    // ラメ 400個
    for (let i = 0; i < 100; i++) {
      const d = document.createElement("div");
      const size = 1.5 + Math.random() * 3;
      const left = 5 + Math.random() * 90;
      const bottom = 8 + Math.random() * 30;
      const anim = anims[Math.floor(Math.random() * anims.length)];
      const color = colors[i % 4];
      const dur = 13 + Math.random() * 5;
      const delay = Math.random() * 6;
      const twDur = 0.6 + Math.random() * 0.5;
      d.className = `p ${color}`;
      d.style.cssText = `
        width:${size}px;height:${size}px;
        left:${left}%;bottom:${bottom}px;
        animation:${anim} ${dur}s ease-in-out ${delay}s infinite, tw ${twDur}s infinite;
      `;
      c.appendChild(d);
    }
  }, []);

  return <div className="particles" id="pc"></div>;
}
