import React, { useEffect, useState } from "react";
import { getWeather } from "./api";

const WeatherList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWeather().then(setData);
  }, []);

  return (
    <div>
      <h2>Weather Records</h2>
      {data.map((item: any) => (
        <div key={item._id}>
          <p>{item.city} - {item.temperature}°C - {item.humidity}% - {item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
