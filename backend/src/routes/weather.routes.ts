import express from "express";
import { createWeather, fetchWeather } from "../controllers/weather.controller";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather data API
 */

/**
 * @swagger
 * /api/weather:
 *   post:
 *     summary: Add new weather data
 *     tags: [Weather]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 example: "Kochi"
 *               temperature:
 *                 type: number
 *                 example: 30
 *               humidity:
 *                 type: number
 *                 example: 80
 *               condition:
 *                 type: string
 *                 example: "Sunny"
 *     responses:
 *       201:
 *         description: Weather data added successfully
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /api/weather:
 *   get:
 *     summary: Get all weather data
 *     tags: [Weather]
 *     responses:
 *       200:
 *         description: List of all weather records
 */

router.post("/", createWeather);  // FIXED
router.get("/", fetchWeather);    // FIXED

export default router;
