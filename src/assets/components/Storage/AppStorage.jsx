import { createContext, useState } from "react";

export const AppStorageContext = createContext([]);

const AppStorageContextProvider = ({ children }) => {
  const [isHamClicked, setHamClick] = useState(false);
  const [whichCardClicked, setCardClick] = useState("");

  function handleHamClick(checkHamClick) {
    if (checkHamClick) {
      setHamClick(false);
    } else {
      setHamClick(true);
    }
  }
  function handleCardClick(text) {
    setCardClick(text);
  }

  return (
    <AppStorageContext.Provider
      value={{
        isHamClicked: isHamClicked,
        whichCardClicked: whichCardClicked,
        handleHamClick: handleHamClick,
        handleCardClick: handleCardClick,
      }}
    >
      {children}
    </AppStorageContext.Provider>
  );
};

export default AppStorageContextProvider;
