import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function Home() {
  const [navbar, setNavbar] = useState("");
  const pacar = "Siapa Hayoo";
  const myName = "Tachul";

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
      <Hero pacar={pacar} myName={myName} />
      <br />
      <Button clicked={clicked} />
      <Footer paragraph={paragraph} />
      <button onClick={() => changeNavbar()}>Ubah Navigasi</button>
    </>
  );
}

export default Home;
