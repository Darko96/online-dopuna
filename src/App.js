import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Cart from "./Cart";
import TopUp from "./TopUp";
import { TopUpProvider } from "./TopUpContext";
import SuccessfulPayment from "./SuccessfulPayment";

function App() {
  return (
    <TopUpProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopUp />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route
            path="successfulPayment"
            element={<SuccessfulPayment />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </TopUpProvider>
  );
}

export default App;
