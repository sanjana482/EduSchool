import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Enquiry() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/enquiries",
        form
      );

      setMessage("Enquiry submitted successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        className: "",
      });
    } catch (error) {
      console.log(error);
      setMessage("Failed to submit enquiry.");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          EduSchool
        </div>
      </nav>

      <main className="enquiry-page">

        <div className="enquiry-header">
          <h1>Get School Counselling</h1>

          <p>
            Share your details and our counsellor will
            help you find the right school.
          </p>
        </div>

        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Parent Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Child's Class</label>

            <select
              value={form.className}
              onChange={(e) =>
                setForm({
                  ...form,
                  className: e.target.value,
                })
              }
              required
            >
              <option value="">Select class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Enquiry
          </button>

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default Enquiry;