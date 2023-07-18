import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/NavBar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;