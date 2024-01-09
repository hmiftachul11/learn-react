import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  const pacar = 'Hasna';
  const myName = 'Tachul';
  const ex = 'Sofie'

  const clicked = () => {
    return alert('Button has been clicked!')
  }

  const paragraph = () => {
    return <i>Mantap Bang!</i>;
  }
  
  return (
    <>
      <h1>Tachul</h1>
      <Hero pacar={pacar} ex = {ex} myName = {myName}/>
      <br/>
      <Button clicked={clicked}/>
      <Footer paragraph={paragraph}/>
    </>
  );
}

export default App;
