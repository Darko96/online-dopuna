import React, { useState, useEffect } from "react";
import { useTopUp } from "./TopUpContext";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const { showMessage, setShowMessage } = useTopUp();
  const navigate = useNavigate();
  const [shouldSave, setShouldSave] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [cardDetails, setCardDetails] = useState(
    localStorage.getItem("savedCard")
  );
  const [pay, setPay] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleShouldSave = (event) => {
    setShouldSave((prevState) => !prevState);
  };

  useEffect(() => {
    const savedCard = localStorage.getItem("savedCard");
    if (savedCard) {
      setPaymentDetails(JSON.parse(savedCard));
    }
  }, []);

  const handlePayment = (event) => {
    event.preventDefault();

    if (shouldSave) {
      localStorage.setItem("savedCard", JSON.stringify(paymentDetails));
    }
  };

  const handleShowMessage = () => {
    setPay(true);

    if (
      paymentDetails.number &&
      paymentDetails.expiry &&
      paymentDetails.cvv &&
      shouldSave
    ) {
      localStorage.setItem("savedCard", JSON.stringify(paymentDetails));
      navigate("/successfulPayment");
    } else {
      setShowMessage(true);
    }
  };

  console.log(pay);

  return (
    <div>
      <form onSubmit={handlePayment}>
        <h3>Placanje karticom</h3>
        <input
          type="text"
          name="number"
          placeholder="Broj kartice"
          value={paymentDetails.number}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder={
            paymentDetails.expiry ? paymentDetails.expiry : "Mesec/Godina"
          }
          value={paymentDetails.expiry}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
          required
        />
        <div>
          <input type="checkbox" onChange={handleShouldSave} />
          <p>Sačuvaj karticu nakon plaćanja</p>
        </div>

        {pay &&
          (!paymentDetails.number ||
            !paymentDetails.expiry ||
            !paymentDetails.cvv) && (
            <p style={{ color: "red" }}>
              Unesite sve potrebne podatke vezane za placanje.
            </p>
          )}
        <button onClick={handleShowMessage} type="submit">
          Nastavi
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
