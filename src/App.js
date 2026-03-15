import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Precautions from "./pages/Precautions";

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

return (

<Router>

<Navbar
isLoggedIn={isLoggedIn}
setIsLoggedIn={setIsLoggedIn}
/>

<Routes>

<Route path="/" element={<Home />} />

<Route
path="/login"
element={<Login setIsLoggedIn={setIsLoggedIn} />}
/>

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/precautions" element={<Precautions />} />

</Routes>

<Footer/>

</Router>

);

}

export default App;