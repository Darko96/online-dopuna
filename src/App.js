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

// Dakle treba kreirati:
// - 4 podrazumevane opcije za dopunu kredita uz jednu opciju gde korisnik moze da unese vrednost dopune
// - Opcija o prihvatanju uslova kao i pristup istima
// - Mogucnost da se otvori korpa i da se vidi sta je dodato u nju
// - Ifnormacije o kupovini i plaćanju
