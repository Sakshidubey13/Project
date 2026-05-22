import React from "react";
import axios from "axios";

export default function api() {
    const API = axios.create({
        baseURL : "http://localhost:3000"
    })
  return <div></div>;
}
