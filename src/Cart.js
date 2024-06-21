import { useTopUp } from "./TopUpContext";

function Cart() {
  const { selectedCheckBox, topUpValue, phoneNumber } = useTopUp();

  return (
    <section class="four-card-section">
      <div class="heading-container">
        <h1>Tvoja korpa</h1>
        <h2>Proveri sve unete podatke, jer povraćaj novca nije moguć.</h2>
      </div>

      <div class="custom-top-up-container">
        <div class="custom-top-up-box">
          <h3>Online dopuna</h3>
          <p>Za broj {phoneNumber}</p>
          <div>
            <p>{topUpValue} RSD</p>
            <p>odmah</p>
          </div>
          <div>
            <p>darkomijatovic2016@gmail.com</p>
            <p>Račun za online dopunu ćeš dobiti putem e-maila.</p>
          </div>
        </div>
      </div>

      <div class="custom-top-up-container">
        <div class="custom-top-up-box">
          <h3>Plaćanje</h3>
          <p>Plaćanje karticom</p>

          <div>
            <input type="checkbox" />
            <label>
              Slažem se sa{" "}
              <a href="https://a1.rs/documents/rs/Uslovi_koriscenja_usluge_A1_Online_prodavnice_Apr2021.pdf">
                uslovima kupovine
              </a>{" "}
              online prepaid dopune.
            </label>
          </div>

          <button>Nastavi</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
