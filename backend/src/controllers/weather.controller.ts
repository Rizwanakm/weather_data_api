import { Request, Response } from "express";
import { addWeather, getWeather } from "../services/weather.service";

export const createWeather = async (req: Request, res: Response) => {
  try {
    const weather = await addWeather(req.body);
    res.json(weather);
  } catch (err) {
    res.status(400).json({ error: "Failed to add weather data" });
  }
};

export const fetchWeather = async (req: Request, res: Response) => {
  try {
    const data = await getWeather();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
