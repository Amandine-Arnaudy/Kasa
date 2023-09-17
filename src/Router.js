import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/NavBar";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import Projects from './pages/ProjectsPage';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;