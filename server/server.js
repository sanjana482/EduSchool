const School = require("./models/School");
const Enquiry = require("./models/Enquiry");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
require("dotenv").config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EduSchool API is running");
});

app.get("/api/schools", async (req, res) => {
  try {
    const schools = await School.find();

    console.log("Schools from MongoDB:", schools);

    res.json(schools);
  } catch (error) {
    console.log("School fetch error:", error);

    res.status(500).json({
      message: "Failed to fetch schools",
    });
  }
});

app.get("/api/schools/:id", async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({
        message: "School not found",
      });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch school",
    });
  }
});

app.post("/api/enquiries", async (req, res) => {
  try {
    console.log("Received enquiry:", req.body);

    const enquiry = await Enquiry.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      className: req.body.className,
    });

    console.log("Saved enquiry:", enquiry);

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.log("Enquiry error:", error);

    res.status(500).json({
      message: "Failed to submit enquiry",
    });
  }
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.log("MongoDB Error:", error.message);
  });