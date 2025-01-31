import { useState } from "react";
import "h8k-components";
import { Routes, Route } from "react-router-dom";
import ItemListManager from "./Pages/ItemListManager";
import HomePage from "./Pages/HomePage";
import SlideShow from "./Pages/SlideShow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ItemListManager" element={<ItemListManager />} />
      <Route path="/SlideShow" element={<SlideShow />} />
    </Routes>
  );
}

export default App;
