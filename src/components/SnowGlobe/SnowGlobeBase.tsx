export default function SnowGlobeBase() {
  return (
    <div className="base">
      <div className="base-connector"></div>
      <div className="base-top"></div>
      <div className="base-body"></div>

      {/* トリガー */}
      <label className="shake-btn" htmlFor="toggle">
        ❄️
      </label>
    </div>
  );
}
