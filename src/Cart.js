import PaymentForm from "./PaymantForm";
import { useTopUp } from "./TopUpContext";

function Cart() {
  const { topUpValue, phoneNumber, emailAdress } = useTopUp();

  return (
    <section className="four-card-section">
      <div className="heading-container">
        <h1>Tvoja korpa</h1>
        <h2>Proveri sve unete podatke, jer povraćaj novca nije moguć.</h2>
      </div>

      <div className="details-box">
        <div className="custom-top-up-container">
          <div className="custom-top-up-box">
            <h3>Online dopuna</h3>
            <p>
              Za broj <span className="number">{phoneNumber}</span>
            </p>
            <div>
              <p>
                <span className="amount">{topUpValue}</span> RSD
              </p>
            </div>
            <div>
              <p>Račun za online dopunu ćeš dobiti putem e-maila.</p>
              <p className="email">{emailAdress}</p>
            </div>
          </div>
        </div>

        <div className="custom-top-up-container">
          <PaymentForm />
        </div>
      </div>
    </section>
  );
}

export default Cart;
