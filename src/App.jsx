import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage"; // adjust path as needed
import Home from "./pages/Home";
import AllVendors from "./pages/AllVendors";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/signup" element={<AuthPage type="signup" />} />
          <Route path="/vendors" element={<AllVendors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;