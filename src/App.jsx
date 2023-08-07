import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Peliculas } from "./pages/Peliculas/Peliculas";
import { Series } from "./pages/Series/Series";
//* Estilos 
import "./public/Sass/Style.scss";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
}
export default App;
