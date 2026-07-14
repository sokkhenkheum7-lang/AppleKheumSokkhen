import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; 
import Home from "./pages/Home";
import Store from "./pages/Store";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad/ipad";
import MacMenu1 from "./pages/MacMenu/MacMenu1";

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
        <Route path="/MacMenu1" element={<MacMenu1/>}/>
        <Route path="/explore-all-mac" element={<MacMenu1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;