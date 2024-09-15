import { Fragment, useContext, useState } from "react";

import "./App.css";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

import AppStorageContextProvider from "./assets/components/Storage/AppStorage";

function App() {
  return (
    <>
      <AppStorageContextProvider>
        <div className="section">
          <Header />
          <Main />
          <Footer />
        </div>
      </AppStorageContextProvider>
    </>
  );
}

export default App;
