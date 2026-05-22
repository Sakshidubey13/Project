import { Routes, Route } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
    </Routes>
  );
}
