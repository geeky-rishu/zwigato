const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p className="contact-subtitle">
        We’d love to hear from you. Send us your questions, feedback, or
        suggestions.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows="5"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
