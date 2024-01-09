import './App.css';
import Hero from './components/Hero';

function App() {
  const pacar = 'Hasna';
  const myName = 'Tachul';
  const ex = 'Sofie'
  return (
    <>
      <h1>Tachul</h1>
      <Hero pacar={pacar} ex = {ex} myName = {myName}/>
    </>
  );
}

export default App;
