import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">

        {/* HERO */}
        <div className="about-hero">
          <h1>Smart Campus Institute</h1>
          <p>Empowering Students for a Better Future 🎓</p>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
            alt="campus"
          />
        </div>

        {/* TEXT */}
        <div className="about-card">
          <p>
            <strong>Smart Campus Institute</strong> is a premier institution
            dedicated to delivering excellence in education and innovation.
          </p>

          <p>
            We provide modern infrastructure, experienced faculty, and a strong
            academic foundation to prepare students for real-world challenges.
          </p>

          <p>
            Our goal is to nurture creativity, leadership, and critical thinking
            among students for a successful future.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;