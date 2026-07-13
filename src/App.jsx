import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; 
import Home from "./pages/Home";
import Store from "./pages/Store";
import Mac from "./pages/Mac";
// 1. IMPORT YOUR IPAD PAGE COMPONENT HERE
import Ipad from "./pages/Ipad/ipad";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar sits inside BrowserRouter so useNavigate works flawlessly */}
      <Navbar />

      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />

        {/* Store & Product Routes */}
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        
        {/* 2. ROUTE CHANGED FROM <iPad /> TO <Ipad /> TO MATCH YOUR COMPONENT DEFINITION */}
        <Route path="/ipad" element={<Ipad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;