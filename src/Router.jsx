import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Header from "./components/Header/NavBar";
import Apartment from "./pages/ApartmentsPage";
import Footer from "./components/Footer/Footer";
import Error from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;