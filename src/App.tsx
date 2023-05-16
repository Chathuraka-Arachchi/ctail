import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store/store";
import { HomePage } from "./app/pages/home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
