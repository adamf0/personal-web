import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioDetail from "./pages/PortofolioDetail";
import PortofolioList from "./pages/PortofolioList";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio/" element={<PortofolioList />} />
        <Route path="/portofolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </Router>
  );
}
