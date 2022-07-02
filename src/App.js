import './App.css';
import HomePage from './components/homepage/homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/order" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
