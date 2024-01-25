import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "../styles/App1.module.css";
import ExerciseDetail from "./ExerciseDetail";
import Home from "../pages/Home";
import Navbar from "../components/Fitness/Navbar";
import BMI from "../components/Fitness/BMI";
import NutritionTracker from "../components/Fitness/NutritionTracker";
import Premium from "../components/Fitness/Premium";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/nutritiontracker" element={<NutritionTracker />} />
      <Route path="/premium" element={<Premium />} />
    </Routes>
  </Box>
);

export default App;
