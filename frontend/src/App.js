import "./App.css";
import React from "react";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import LandingPage from "screens/landingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
//  <main style={{minHeight: "93vh"}}></main>
