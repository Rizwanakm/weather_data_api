const API = "http://localhost:5000/api";

export const addWeather = async (data: any) =>
  await fetch(`${API}/weather`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const getWeather = async () =>
  await fetch(`${API}/weather`).then((res) => res.json());
