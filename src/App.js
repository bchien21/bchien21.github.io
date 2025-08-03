import { HashRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from "./components/Layout";
import './App.css';

import Home from "./components/Home";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import PPR from "./components/ProjectList/Research/PPR_Elements/PPR";
import Nucor from "./components/ProjectList/Industry/NucorInternship/Nucor";
import Medsnake from "./components/ProjectList/Research/Medsnake_Elements/Medsnake";
import AssistiveTech from "./components/ProjectList/Academics/AssistiveTech/AssistiveTech";
import ElectroMech from "./components/ProjectList/Academics/ElectroMech/ElectroMech";
import NSIN_CAD from "./components/ProjectList/Industry/NucorInternship/CAD_Components/NSIN_CAD";
import NSIN_FEA from "./components/ProjectList/Industry/NucorInternship/FEA_Components/NSIN_FEA";
import NSIN_TechnicalDrawings from "./components/ProjectList/Industry/NucorInternship/Drawing_Components/NSIN_TechnicalDrawings";
import Ford from "./components/ProjectList/Industry/Ford/Ford.js"
import RRT from "./components/ProjectList/Academics/RRT/RRT.js";

import routeConfig from './routes';

const componentMap = {
  Home,
  Projects,
  WorkExperience,
  PPR,
  Medsnake,
  AssistiveTech,
  ElectroMech,
  Nucor,
  NSIN_CAD,
  NSIN_FEA,
  NSIN_TechnicalDrawings,
  Ford,
  RRT,
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeConfig.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={React.createElement(componentMap[element])}
            />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

