import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Adjust this path to match your Navbar location
import Home from "./pages/Home";
import Store from "./pages/Store";// Make sure to create or import your Store page component

function App() {
  return (
    <BrowserRouter>
      {/* Placing Navbar here ensures it is inside the Router context, 
        which fixes the useNavigate() crash! 
      */}
      <Navbar />

      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Your new Store Route */}
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;