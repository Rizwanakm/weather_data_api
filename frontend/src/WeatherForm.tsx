import React, { useState } from "react";
import { addWeather } from "./api";

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addWeather({
      city,
      temperature: Number(temperature),
      humidity: Number(humidity),
      condition,
    });

    alert("Weather Data Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
      <input placeholder="Temperature" onChange={(e) => setTemperature(e.target.value)} />
      <input placeholder="Humidity" onChange={(e) => setHumidity(e.target.value)} />
      <input placeholder="Condition" onChange={(e) => setCondition(e.target.value)} />
      <button type="submit">Add Weather</button>
    </form>
  );
};

export default WeatherForm;
