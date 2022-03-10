import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import InputForm from "./components/InputForm";

 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<InputForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;