import { useState } from "react";
import AppointmentForm from "./src/components/AppointmentForm";
import AppointmentsList from "./src/components/AppointmentsList";
import UpdateAppointment from "./src/components/UpdateAppointment";
import "./src/styles.css";

const App = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const refreshAppointments = () => setRefreshTrigger(!refreshTrigger);
  const closeForm = () => setEditingId(null);

  return (
    <div>
      <h1>Appointment Tracker</h1>
      <AppointmentForm refreshAppointments={refreshAppointments} />
      {editingId && (
        <UpdateAppointment
          appointmentId={editingId}
          refreshAppointments={refreshAppointments}
          closeForm={closeForm}
        />
      )}
      <AppointmentsList
        key={refreshTrigger}
        refreshAppointments={refreshAppointments}
        setEditingId={setEditingId} // Pass function to enable editing
      />
    </div>
  );
};

export default App;
