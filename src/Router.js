import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/NavBar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Apartment from "./pages/ApartmentPage";
import Error from "./pages/ErrorPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;