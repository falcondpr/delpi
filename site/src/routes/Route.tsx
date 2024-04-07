import { BrowserRouter, Routes, Route } from "react-router-dom";

import Departments from "../screens/Departments";
import Home from "../screens/Home";
import Cities from "../screens/Cities";
import Neighbourhood from "../screens/Neighbourhood";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departamentos" element={<Departments />} />
        <Route path="/ciudades" element={<Cities />} />
        <Route path="/barrios" element={<Neighbourhood />} />
      </Routes>
    </BrowserRouter>
  );
}
