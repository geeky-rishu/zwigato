const About = () => {
  return (
    <div className="about-container">
      <h1>About Zwigato</h1>

      <p>
        Zwigato is a modern food ordering platform designed to deliver delicious
        meals from your favorite restaurants with speed, reliability, and
        simplicity. Built using React and Redux, Zwigato focuses on providing a
        seamless user experience with real-time menu browsing and intuitive cart
        management.
      </p>

      <div className="about-features">
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Optimized logistics ensure your food arrives hot and fresh.</p>
        </div>

        <div className="feature">
          <h3>Secure Payments</h3>
          <p>Advanced security protocols protect every transaction.</p>
        </div>

        <div className="feature">
          <h3>Wide Restaurant Network</h3>
          <p>Choose from hundreds of local and premium restaurants.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
