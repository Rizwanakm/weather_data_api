import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";

function App() {
  return (
    <div>
      <h1>Weather Data Dashboard</h1>
      <WeatherForm />
      <WeatherList />
    </div>
  );
}

export default App;
