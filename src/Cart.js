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

      <div className="custom-top-up-container">
        <div className="custom-top-up-box">
          <h3>Online dopuna</h3>
          <p>Za broj {phoneNumber}</p>
          <div>
            <p>{topUpValue} RSD</p>
            <p>odmah</p>
          </div>
          <div>
            <p>{emailAdress}</p>
            <p>Račun za online dopunu ćeš dobiti putem e-maila.</p>
          </div>
        </div>
      </div>

      <div className="custom-top-up-container">
        <PaymentForm />
      </div>
    </section>
  );
}

export default Cart;
