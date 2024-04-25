import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import Foods from "./components/Food/Foods";
import About from "./components/About";
import FoodDetail from "./components/Food/FoodDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddFood />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/about" element={<About />} />
          <Route path="/foods/:id" element={<FoodDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
