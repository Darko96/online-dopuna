import { createContext, useContext, useState } from "react";

const TopUpContext = createContext();

function TopUpProvider({ children }) {
  const [selectedCheckBox, setSelectedCheckBox] = useState("checkbox-500");
  const [topUpValue, setTopUpValue] = useState(500);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSelectedCheckBox = (event) => {
    const { name } = event.target;
    setSelectedCheckBox(name);
    setTopUpValue(event.target.value);
  };

  const handleTopUpValue = (event) => {
    setTopUpValue(event.target.value);
  };

  const handleAgreedToTerms = (event) => {
    setAgreedToTerms(event.target.checked);
  };

  const handlePhoneNUmber = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <TopUpContext.Provider
      value={{
        selectedCheckBox,
        setSelectedCheckBox,
        topUpValue,
        setTopUpValue,
        agreedToTerms,
        setAgreedToTerms,
        showMessage,
        setShowMessage,
        phoneNumber,
        setPhoneNumber,
        handlePhoneNUmber,
        handleSelectedCheckBox,
        handleTopUpValue,
        handleAgreedToTerms,
      }}
    >
      {children}
    </TopUpContext.Provider>
  );
}

function useTopUp() {
  const context = useContext(TopUpContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { TopUpProvider, useTopUp };
