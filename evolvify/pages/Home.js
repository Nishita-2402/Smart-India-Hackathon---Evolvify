import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/Fitness/HeroBanner";
import SearchExercises from "../components/Fitness/SearchExercises";
import Exercises from "../components/Fitness/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
