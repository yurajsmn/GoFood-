import { CartProvider } from "./Components/ContextReducer";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Myorder from "./screens/Myorder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
        <Route path="/myOrder" element={<Myorder />} />
        
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
