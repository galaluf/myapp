import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ol>
        <li><b>Nombre:</b> Notebook</li>
        <li><b>Descripcion:</b> HP Proliant 14.5</li>
        <li><b>Precio:</b> $ 145.000,00</li>
        <li><b>SKU:</b> HPLA31562</li>
        <li><b>Cant. Disponible:</b> 8</li>
      </ol>
      {/* 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
      */}
    </div>
  );
}

export default App;
