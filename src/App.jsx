import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
