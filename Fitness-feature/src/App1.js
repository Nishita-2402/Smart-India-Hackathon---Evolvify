import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BMI from "./components/BMI";
import NutritionTracker from "./components/NutritionTracker";
import Premium from "./components/Premium";

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
