import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/NavBar";
import Home from "./pages/HomePage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;