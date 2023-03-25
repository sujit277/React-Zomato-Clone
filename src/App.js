import "./App.css";
import HomePage from "./components/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/order" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
