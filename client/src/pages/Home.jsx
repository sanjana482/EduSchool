import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const handleSearch = () => {
    navigate(
      `/schools?city=${encodeURIComponent(city)}&search=${encodeURIComponent(
        schoolName
      )}`
    );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">EduSchool</div>

        <div className="nav-links">
          <span onClick={() => navigate("/schools")}>Schools</span>
          <span>Compare</span>
          <span>About Us</span>

          <button onClick={() => navigate("/enquiry")}>
            Get Counselling
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find the Best School for Your Child</h1>

          <p>
            Discover schools, compare options and find the right
            education for your child.
          </p>

          <div className="search-box">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
            </select>

            <input
              type="text"
              placeholder="Search school name..."
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />

            <button onClick={handleSearch}>
              Search Schools
            </button>
          </div>
        </div>
      </section>

      {/* Popular Schools */}
      <section className="section">
  <h2>Popular Schools</h2>

  <div className="school-grid">
    <div className="school-card">
      <div className="school-image">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585"
          alt="ABC International School"
        />
      </div>

      <h3>ABC International School</h3>
      <p>📍 Mumbai, Maharashtra</p>
      <p>📚 CBSE • ₹80,000/year</p>

      <button onClick={() => navigate("/schools")}>
        View Details
      </button>
    </div>

    <div className="school-card">
      <div className="school-image">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
          alt="Delhi Public School"
        />
      </div>

      <h3>Delhi Public School</h3>
      <p>📍 Delhi, India</p>
      <p>📚 CBSE • ₹95,000/year</p>

      <button onClick={() => navigate("/schools")}>
        View Details
      </button>
    </div>

    <div className="school-card">
      <div className="school-image">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          alt="Ryan International School"
        />
      </div>

      <h3>Ryan International School</h3>
      <p>📍 Mumbai, Maharashtra</p>
      <p>📚 ICSE • ₹75,000/year</p>

      <button onClick={() => navigate("/schools")}>
        View Details
      </button>
    </div>
  </div>
</section>

      {/* Cities */}
      <section className="cities">
  <h2>Popular Cities</h2>

  <div className="city-list">

    <div className="city-card">
      <img
        src="https://images.unsplash.com/photo-1595658658481-d53d3f999875"
        alt="Mumbai"
      />
      <span>Mumbai</span>
    </div>

    <div className="city-card">
      <img
        src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
        alt="Delhi"
      />
      <span>Delhi</span>
    </div>

    <div className="city-card">
      <img
        src="https://images.unsplash.com/photo-1595658658481-d53d3f999875"
        alt="Pune"
      />
      <span>Pune</span>
    </div>

    <div className="city-card">
      <img
        src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2"
        alt="Bangalore"
      />
      <span>Bangalore</span>
    </div>

    <div className="city-card">
       <img
    src="https://m.ahstatic.com/is/image/accorhotels/Destination_Hyderabad:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=223&qlt=80"
    alt="Hyderabad"
  />
      <span>Hyderabad</span>
    </div>

  </div>
</section>
    </div>
  );
}

export default Home;