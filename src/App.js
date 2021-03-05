import logo from './logo.svg';
import './App.css';
import SearchMovies from './components/SearchMovies'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>React Movie Search</h3>
      <SearchMovies />
      </header>
    </div>
  );
}

export default App;
