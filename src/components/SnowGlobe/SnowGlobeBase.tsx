export default function SnowGlobeBase() {
  return (
    <div className="base">
      {/* これがトグルのスイッチになる */}
      <label
        className="shake-btn"
        htmlFor="toggle"
        role="button"
        aria-label="Shake"
      >
        ❄️
      </label>

      <div className="base-connector"></div>
      <div className="base-top"></div>
      <div className="base-body"></div>
    </div>
  );
}
