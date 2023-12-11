import Home from "./commerce/Home";
import Login from "./commerce/Login";
import Sign from "./commerce/Sign";
import Product from "./commerce/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Oder from "./commerce/Oder";
import Details from "./commerce/Details";
import Footer from "./commerce/Footer";
import Locatin from "./commerce/Locatin";
import Header from "./commerce/Header";
import Update from "./commerce/Update";
import Admin from "./commerce/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/oder" element={<Oder />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/cartSlice" element={<cartSlice />} />
          <Route path="/location" element={<Locatin />} />
          <Route path="/update" element={<Update/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;