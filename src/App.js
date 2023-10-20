import logo from './logo.svg';
import './App.css';
import { FirtsComponent } from './Components/FirtsComponent';
import { SecondComponent } from './Components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> I'm Happy with my firts Script with react</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <FirtsComponent/>

      <SecondComponent/>
      </header>
    </div>
  );
}

export default App;
