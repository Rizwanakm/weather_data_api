import { Weather, IWeather } from "../models/weather.model";

export const addWeather = async (data: Partial<IWeather>) => {
  return await Weather.create(data);
};

export const getWeather = async () => {
  return await Weather.find().sort({ date: -1 });
};
