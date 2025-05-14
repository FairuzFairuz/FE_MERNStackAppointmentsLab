import { useState } from "react";
import { addAppointment } from "../api.js";

const AppointmentForm = ({ refreshAppointments }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    purpose: "",
    company: "",
    person: "",
    address: "",
    date: "",
    time: "",
    comments: "",
  });
  const [error, setError] = useState(""); // Track submission errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before submission

    if (!formData.title || !formData.date || !formData.time) {
      setError("Title, Date, and Time are required.");
      return;
    }

    try {
      await addAppointment(formData);
      refreshAppointments();
      setFormData({
        // Clear form after submission
        title: "",
        type: "",
        purpose: "",
        company: "",
        person: "",
        address: "",
        date: "",
        time: "",
        comments: "",
      });
    } catch (err) {
      setError("Failed to add appointment. Please try again.");
      console.error("Error adding appointment:", err);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Appointment</h2>

      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          name="purpose"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          name="person"
          placeholder="Person"
          value={formData.person}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        />
        <button type="submit">Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
