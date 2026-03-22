import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Public.css";

function PublicFacilities() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Facilities</h1>
        <p>Modern infrastructure for better learning</p>
      </div>

      <div className="section">
        <h2>Campus Facilities</h2>

        <div className="grid">
          <div className="card">
            <h3>Library</h3>
            <p>Thousands of books and digital resources.</p>
          </div>

          <div className="card">
            <h3>Laboratories</h3>
            <p>Advanced labs for practical learning.</p>
          </div>

          <div className="card">
            <h3>Sports Complex</h3>
            <p>Indoor & outdoor sports facilities.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PublicFacilities;