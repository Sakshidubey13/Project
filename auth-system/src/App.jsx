import React from "react";
import router, { Route, Routes } from 'react-router'
import Ragister from './pages/Ragister'
import Home from "./pages/Home";

export default function App() {
  return <div>
    <Routes>
  <Route path="/register" element={<Regiter/>}/>
  <Route path="/home" element={<Home/>}/>
    </Routes>
  </div>;
}
