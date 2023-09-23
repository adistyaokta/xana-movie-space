import './App.css';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import Content from './components/Content';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className="Section-trending">
        <h1 className="Section-title">Trending</h1>
        <Trending/>
        </div>
        <div className="Section-content">
        <h1 className="Section-title">Popular Movies</h1>
          <Content/>
        </div>
      </header>
    </div>
  )
}

export default App;
