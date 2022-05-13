import React from "react";
import Router from "./Router";
import { AuthContextProvider } from "./context/AuthContext";
import "./styles/globals.css";

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
