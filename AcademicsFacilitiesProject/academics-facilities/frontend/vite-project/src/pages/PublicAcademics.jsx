import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Public.css";

function PublicAcademics() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Academics</h1>
        <p>Explore our programs designed for excellence</p>
      </div>

      <div className="section">
        <h2>Our Programs</h2>

        <div className="grid">
          <div className="card">
            <h3>Bachelor of Science</h3>
            <p>Strong foundation in science and research.</p>
          </div>

          <div className="card">
            <h3>Commerce</h3>
            <p>Business and finance studies.</p>
          </div>

          <div className="card">
            <h3>Computer Science</h3>
            <p>Programming and modern technologies.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PublicAcademics;