const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Zwigato</h3>
          <p>Delivering happiness at your doorstep.</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Zwigato. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
