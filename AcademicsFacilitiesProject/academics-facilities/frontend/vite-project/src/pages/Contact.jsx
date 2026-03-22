import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Contact Us</h1>
        <p>Email: smartcampus@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;