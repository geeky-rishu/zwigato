import "./ShimmerMenu.css";

const ShimmerMenu = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-header">
        <div className="shimmer-img"></div>
        <div className="shimmer-info">
          <div className="shimmer-line title"></div>
          <div className="shimmer-line small"></div>
          <div className="shimmer-line small"></div>
        </div>
      </div>

      {[...Array(4)].map((_, i) => (
        <div className="shimmer-category" key={i}>
          <div className="shimmer-line category"></div>

          {[...Array(3)].map((_, j) => (
            <div className="shimmer-item" key={j}>
              <div className="shimmer-text">
                <div className="shimmer-line"></div>
                <div className="shimmer-line small"></div>
                <div className="shimmer-line small"></div>
              </div>
              <div className="shimmer-img-sm"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
