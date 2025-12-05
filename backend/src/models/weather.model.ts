import { Schema, model, Document } from "mongoose";

export interface IWeather extends Document {
  city: string;
  temperature: number;
  humidity: number;
  condition: string;
  date: Date;
}

const WeatherSchema = new Schema<IWeather>({
  city: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  condition: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export const Weather = model<IWeather>("Weather", WeatherSchema);
