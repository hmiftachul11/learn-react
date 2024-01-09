import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [navbar, setNavbar] = useState("");
  const pacar = "Hasna";
  const myName = "Tachul";
  const ex = "Sofie";

  const clicked = () => {
    return alert("Button has been clicked!");
  };

  const paragraph = () => {
    return <i>Mantap Bang!</i>;
  };

  const changeNavbar = () => {
    setNavbar(navbar === "My Contact" ? "About" : "My Contact");
  };

  return (
    <>
      <Navbar navValue={navbar} onNavbarChange={changeNavbar}/>
      <h1>Tachul</h1>
      <Hero pacar={pacar} ex={ex} myName={myName} />
      <br />
      <Button clicked={clicked} />
      <Footer paragraph={paragraph} />
      <button onClick={() => changeNavbar()}>Ubah Navigasi</button>
    </>
  );
}

export default App;
