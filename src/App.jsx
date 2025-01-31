import { useState } from "react";
import "h8k-components";
import { Routes, Route } from "react-router-dom";
import ItemListManager from "./Pages/ItemListManager";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ItemListManager" element={<ItemListManager />} />
    </Routes>
  );
}

export default App;
