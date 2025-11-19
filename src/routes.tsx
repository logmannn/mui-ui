import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
