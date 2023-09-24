import './App.css';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import Content from './components/Content';
import Latest from './components/Latest';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <header className="App-header" id='home'>
        <Navbar/>
        <div className="Section-trending">
        <h1 className="Section-title">Trending Movies</h1>
        <Trending/>
        </div>
        <div className="Section-content">
        <h1 className="Section-title">Popular Movies</h1>
          <Content/>
        </div>
        <div className="Section-content">
        <h1 className="Section-title">Latest Movies</h1>
          <Latest/>
        </div>
        <Footer/>
      </header>
    </div>
  )
}

export default App;
