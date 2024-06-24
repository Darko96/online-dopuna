import logo from "./assets/logo.png";

function SuccessfulPayment() {
  return (
    <section className="four-card-section">
      <div className="heading-container">
        <h1>Uspešno ste dopunili kredit</h1>
        <h2>Uživajte u našim uslugama</h2>

        <img className="logo" alt="a1 logo" src={logo} />
      </div>
    </section>
  );
}

export default SuccessfulPayment;
