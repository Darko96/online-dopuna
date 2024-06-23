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
    if (paymentDetails.number && paymentDetails.expiry && paymentDetails.cvv) {
      setPay(true);
      navigate("/successfulPayment");
    } else {
      setShowMessage(true);
    }

    if (shouldSave) {
      localStorage.setItem("savedCard", JSON.stringify(paymentDetails));
    }
  };

  console.log(pay);

  return (
    <section className="cart-container">
      <div className="custom-top-up-box">
        <form onSubmit={handlePayment}>
          <h3>Placanje karticom</h3>

          <div className="card-input-box">
            <input
              type="number"
              name="number"
              placeholder="1234 1234 1234 1234"
              value={paymentDetails.number}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="expiry"
              placeholder={
                paymentDetails.expiry ? paymentDetails.expiry : "06/24"
              }
              value={paymentDetails.expiry}
              onChange={handleInputChange}
              maxlength="16"
              required
            />
            <input
              type="number"
              name="cvv"
              placeholder="123"
              maxlength="3"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="save-card-box">
            <input type="checkbox" onChange={handleShouldSave} />
            <p id="terms" className="terms">
              Sačuvaj karticu nakon plaćanja
            </p>
          </div>

          {pay &&
            (!paymentDetails.number ||
              !paymentDetails.expiry ||
              !paymentDetails.cvv) && (
              <p className="terms" style={{ color: "red" }}>
                Unesite sve potrebne podatke vezane za placanje.
              </p>
            )}
          <button className="btn" onClick={handleShowMessage} type="submit">
            Nastavi &#x2192;
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
