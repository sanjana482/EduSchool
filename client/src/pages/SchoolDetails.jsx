import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SchoolDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/schools/${id}`
        );

        setSchool(response.data);
      } catch (error) {
        console.log("Error fetching school:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, [id]);

  if (loading) {
    return <p style={{ padding: "50px" }}>Loading...</p>;
  }

  if (!school) {
    return (
      <div className="section">
        <h2>School not found</h2>
        <button onClick={() => navigate("/schools")}>
          Back to Schools
        </button>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          EduSchool
        </div>

        <button
  className="enquire-btn"
  onClick={() => navigate("/enquiry")}
>
  Enquire Now
</button>
      </nav>

      <main className="section">
        <div className="school-details">
          <div className="school-image large-image">
  <img src={school.image} alt={school.name} />
</div>

          <h1>{school.name}</h1>

          <p>📍 {school.city}</p>
          <p>📚 {school.board}</p>
          <p>💰 ₹{school.fees}/year</p>
          <p>🏫 {school.type}</p>

          <h2>Facilities</h2>

          <p>
            {school.facilities?.join(" • ")}
          </p>

          <button
  className="enquire-btn"
  onClick={() => navigate("/enquiry")}
>
  Enquire Now
</button>
        </div>
      </main>
    </div>
  );
}

export default SchoolDetails;