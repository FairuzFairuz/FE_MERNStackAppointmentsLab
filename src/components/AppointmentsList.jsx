import { useEffect, useState } from "react";
import { getAppointments } from "../api.js";
import { deleteAppointment } from "../api.js";

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then(setAppointments).catch(console.error);
  }, []);

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    setAppointments(appointments.filter((appt) => appt._id !== id));
  };

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(({ _id, title, type, date, time }) => (
          <li key={_id}>
            <strong>{title}</strong> - {type} - {date} at {time}
            <button onClick={() => handleDelete(_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsList;
