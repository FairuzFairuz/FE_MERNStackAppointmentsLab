const BASE_URL = import.meta.env.VITE_SERVER;

export const getAppointments = async () => {
  const response = await fetch(`${BASE_URL}/api/appointments`);
  return response.json();
};

export const getAppointmentDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/api/appointments/${id}`);
  return response.json();
};

export const addAppointment = async (data) => {
  const response = await fetch(`${BASE_URL}/api/appointments`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateAppointment = async (id, data) => {
  const response = await fetch(`${BASE_URL}/api/appointments/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteAppointment = async (id) => {
  await fetch(`${BASE_URL}/api/appointments/${id}`, {
    method: "DELETE",
  });
};
