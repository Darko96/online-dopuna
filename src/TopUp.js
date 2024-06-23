import { useTopUp } from "./TopUpContext";
import { useNavigate } from "react-router-dom";

function TopUp() {
  const {
    selectedCheckBox,
    topUpValue,
    agreedToTerms,
    showMessage,
    setShowMessage,
    phoneNumber,
    emailAdress,
    handleEmailAdressr,
    handleSelectedCheckBox,
    handleTopUpValue,
    handleAgreedToTerms,
    handlePhoneNUmber,
  } = useTopUp();
  const navigate = useNavigate();

  const handleShowMessage = () => {
    if (
      agreedToTerms &&
      phoneNumber &&
      !(topUpValue < 200 || topUpValue > 5000)
    ) {
      navigate("/cart");
    } else if (agreedToTerms && !phoneNumber) {
      setShowMessage(true);
    } else if (agreedToTerms && (topUpValue < 200 || topUpValue > 5000)) {
      setShowMessage(true);
    } else if (agreedToTerms && !emailAdress) {
      setShowMessage(true);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <section className="four-card-section">
      <div className="heading-container">
        <h1>Dopuni online</h1>
        <h2>Dopuni prepaid brzo i lako</h2>
      </div>

      <div className="four-card-container">
        <div className="four-card-box supervisor">
          <h3>500 RSD</h3>
          <input
            type="checkbox"
            name="checkbox-500"
            checked={selectedCheckBox === "checkbox-500"}
            value={500}
            onChange={handleSelectedCheckBox}
          />
        </div>
        <div className="middle">
          <div className="four-card-box team-builder">
            <h3>800 RSD</h3>
            <input
              type="checkbox"
              name="checkbox-800"
              checked={selectedCheckBox === "checkbox-800"}
              value={800}
              onChange={handleSelectedCheckBox}
            />
          </div>

          <div className="four-card-box karma">
            <h3>1.200 RSD</h3>
            <input
              type="checkbox"
              name="checkbox-1200"
              checked={selectedCheckBox === "checkbox-1200"}
              value={1200}
              onChange={handleSelectedCheckBox}
            />
          </div>
        </div>

        <div className="four-card-box calculator">
          <h3>2.000 RSD</h3>
          <input
            type="checkbox"
            name="checkbox-2000"
            checked={selectedCheckBox === "checkbox-2000"}
            value={2000}
            onChange={handleSelectedCheckBox}
          />
        </div>
      </div>

      <div className="custom-top-up-container">
        <div className="custom-top-up-box">
          <h3>Drugi iznos</h3>
          <p>Unesi iznos dopune izmedju 200 i 5000 RSD</p>
          <input
            type="checkbox"
            name="checkbox-custom"
            checked={selectedCheckBox === "checkbox-custom"}
            value={topUpValue}
            onChange={handleSelectedCheckBox}
          />
          {selectedCheckBox === "checkbox-custom" && (
            <input
              onChange={handleTopUpValue}
              type="number"
              // min="200"
              // max="5000"
            />
          )}
        </div>
      </div>

      <div className="custom-top-up-container">
        <div className="custom-top-up-box">
          <h3>Kome želiš da dopuniš kredit?</h3>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Broj telefona za dopunu*"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            onChange={handlePhoneNUmber}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail adresa *"
            pattern=".+@example\.com"
            size="30"
            onChange={handleEmailAdressr}
          />
        </div>
      </div>

      <div className="custom-top-up-container">
        <div className="custom-top-up-box">
          <h3>Još malo do kraja kupovine</h3>
          <p>Ostalo je još samo da potvrdiš i uneseš podatke za plaćanje.</p>
          <div>
            <input
              type="checkbox"
              name="checkbox-agree"
              checked={agreedToTerms}
              onClick={handleAgreedToTerms}
            />
            <label>
              Slažem se sa{" "}
              <a href="https://a1.rs/documents/rs/Uslovi_koriscenja_usluge_A1_Online_prodavnice_Apr2021.pdf">
                uslovima kupovine
              </a>{" "}
              online prepaid dopune.
            </label>
          </div>

          {agreedToTerms &&
            (topUpValue < 200 || topUpValue > 5000) &&
            showMessage && (
              <p style={{ color: "red" }}>
                Uneti iznos mora biti između 200 i 5000.
              </p>
            )}
          {agreedToTerms && !phoneNumber && showMessage && (
            <p style={{ color: "red" }}>Unesite broj telefona.</p>
          )}
          {agreedToTerms && !emailAdress && showMessage && (
            <p style={{ color: "red" }}>Unesi ispravnu e-mail adresu.</p>
          )}
          {!agreedToTerms && showMessage && (
            <p style={{ color: "red" }}>
              Morate se složiti sa uslovima kupovine pre nego što nastavite.
            </p>
          )}
          <button onClick={handleShowMessage}>Nastavi</button>
        </div>
      </div>
    </section>
  );
}

export default TopUp;
