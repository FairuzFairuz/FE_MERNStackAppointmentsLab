import { useEffect, useState } from "react";
import { getAppointments } from "../api.js";
import { deleteAppointment } from "../api.js";

const AppointmentsList = ({ refreshAppointments, setEditingId }) => {
  // Ensure setEditingId is received
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then(setAppointments).catch(console.error);
  }, [refreshAppointments]);

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    setAppointments(appointments.filter((appt) => appt._id !== id));
  };

  return (
    <div className="container">
      <h2 className="title">Appointments</h2>
      <div className="appointment-grid">
        {appointments.map(
          ({
            _id,
            title,
            type,
            date,
            time,
            purpose,
            company,
            person,
            address,
            comments,
          }) => (
            <div key={_id} className="appointment-card">
              <h3>{title}</h3>
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              <p>
                <strong>Purpose:</strong> {purpose || "NA"}
              </p>
              <p>
                <strong>Company:</strong> {company || "NA"}
              </p>
              <p>
                <strong>Person:</strong> {person || "NA"}
              </p>
              <p>
                <strong>Address:</strong> {address || "NA"}
              </p>
              <p>
                <strong>Comments:</strong> {comments || "NA"}
              </p>
              <div className="appointment-actions">
                <button className="edit-btn" onClick={() => setEditingId(_id)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AppointmentsList;
