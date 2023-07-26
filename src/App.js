import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className='container'> 
      <div className="App">
         <Weather defaultCity="Sandton"/>
      </div>
      <footer>
          <a href="https://github.com/NhloniNkwinika/Weather-React-App" target="_blank" rel="noreferrer">Open source code </a>
          by Nhlonipho
         </footer>
    </div>
  );
}

export default App;