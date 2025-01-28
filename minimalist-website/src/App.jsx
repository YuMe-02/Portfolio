import React from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./styles.css"; // Import your CSS file

const App = () => {
  return (
    <div className="container">
      <Header />
      <Loader />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
