import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function Schools() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [schools, setSchools] = useState([]);

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [city, setCity] = useState(
    searchParams.get("city") || ""
  );

  const [board, setBoard] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          "https://eduschool-hyp1.onrender.com/api/schools"
        );

        setSchools(response.data);
      } catch (error) {
  console.log("Error fetching schools:", error);
  setError("Unable to load schools. Please try again.");
} finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  const filteredSchools = schools.filter((school) => {
    return (
      school.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (city === "" || school.city === city) &&
      (board === "" || school.board === board)
    );
  });

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          EduSchool
        </div>

        <button
  className="counselling-btn"
  onClick={() => navigate("/enquiry")}
>
  Get Counselling
</button>
      </nav>

      {/* Schools Section */}
      <main className="section">
        <h1>Find Schools</h1>

        <p className="page-subtitle">
          Search and compare schools according to your requirements.
        </p>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search school..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">All Cities</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

          <select
            value={board}
            onChange={(e) => setBoard(e.target.value)}
          >
            <option value="">All Boards</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
          </select>
        </div>

        {/* Loading */}
        {loading ? (
  <p>Loading schools...</p>
) : error ? (
  <p className="error-message">{error}</p>
) : (
          <>
            {/* School Cards */}
            <div className="school-grid">
              {filteredSchools.map((school) => (
                <div
                  className="school-card"
                  key={school._id}
                >
                  <div className="school-image">
  <img src={school.image} alt={school.name} />
</div>

                  <h3>{school.name}</h3>

                  <p>📍 {school.city}</p>

                  <p>📚 {school.board}</p>

                  <p>
                    💰 ₹{school.fees}/year
                  </p>

                  <p>🏫 {school.type}</p>

                  <button
                    onClick={() =>
                      navigate(`/school/${school._id}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredSchools.length === 0 && (
              <p className="no-results">
                No schools found.
              </p>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Schools;