import { useState, useEffect } from "react";
import { getAppointmentDetails, updateAppointment } from "../api.js";

const UpdateAppointment = ({
  appointmentId,
  refreshAppointments,
  closeForm,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    comments: "",
  });

  useEffect(() => {
    getAppointmentDetails(appointmentId)
      .then(setFormData)
      .catch((err) => console.error("Error fetching appointment:", err));
  }, [appointmentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAppointment(appointmentId, formData);
    refreshAppointments();
    closeForm();
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
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
        value={formData.comments}
        onChange={handleChange}
      />
      <button type="submit">Update Appointment</button>
      <button type="button" onClick={closeForm}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateAppointment;
