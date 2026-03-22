import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
<div className="hero">
  <div className="hero-overlay">
    <h1>Smart Campus Institute</h1>
    <p>Empowering Students for a Better Future 🎓</p>

    <button className="cta-btn">Apply Now</button>
  </div>
</div>

      {/* ABOUT */}
      <div id="about" className="section">
        <h2>About Us</h2>
        <p>
          Smart Campus Institute provides world-class education with modern
          infrastructure and experienced faculty.
        </p>
      </div>

      {/* STATS */}
<div className="stats">
  <div className="stat">
    <h2>5000+</h2>
    <p>Students</p>
  </div>

  <div className="stat">
    <h2>50+</h2>
    <p>Courses</p>
  </div>

  <div className="stat">
    <h2>20+</h2>
    <p>Facilities</p>
  </div>
</div>

      {/* ACADEMICS */}
      <div id="academics" className="section">
        <h2>Academics</h2>

        <div className="grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d" />
            <div className="overlay">View Details</div>
            <h3>Science</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" />
            <div className="overlay">View Details</div>
            <h3>Commerce</h3>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
            <div className="overlay">View Details</div>
            <h3>Computer Science</h3>
          </div>
        </div>
      </div>

      {/* FACILITIES */}
<div id="facilities" className="section">
  <h2>Facilities</h2>

  <div className="grid">

    <div className="card">
      <img 
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        alt="Library"
      />
      <h3>Library</h3>
      <p>Rich collection of books</p>
    </div>

    <div className="card">
      <img 
  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  alt="Laboratory"
/>
      <h3>Laboratories</h3>
      <p>Advanced practical labs</p>
    </div>

    <div className="card">
      <img 
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
        alt="Sports"
      />
      <h3>Sports Complex</h3>
      <p>Indoor & outdoor sports</p>
    </div>

  </div>
</div>

      {/* CONTACT */}
      <div id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Email: smartcampus@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <Footer />
    </>
  );
}

export default Home;