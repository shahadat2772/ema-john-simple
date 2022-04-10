import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      {/* Routes */}
      <Routes>
        {/* Shop Component */}
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        {/* Orders */}
        <Route path="/orders" element={<Orders></Orders>}></Route>
        {/* Inventory */}
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        {/* Shipment */}
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>
        {/* Login */}
        <Route path="/login" element={<Login></Login>}></Route>
        {/* Sign UP */}
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        {/* About */}
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
