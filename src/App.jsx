import { Fragment, useState } from "react";

import "./App.css";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

function App() {
  const [isOverlayOn, setOverlay] = useState(false);

  function handleOverlay(overlay) {
    setOverlay(overlay);
  }
  return (
    <>
      <div className="section">
        <Header handleOverlay={handleOverlay} />
        <Main overlay={isOverlayOn} />
        <Footer />
      </div>
    </>
  );
}

export default App;
