import './App.css';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import Content from './components/Content';
import Latest from './components/Latest';
import Footer from './components/Footer';
import { useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  }
  return (
    <div className="App">
      <header className="App-header" id='home'>
        <Navbar onSearch={handleSearch}/>
        <div className="Section-trending">
        <h1 className="Section-title">Trending Movies</h1>
        <Trending/>
        </div>
        <div className="Section-content">
        <h1 className="Section-title">Popular Movies</h1>
          <Content searchValue={searchValue}/>
        </div>
        <div className="Section-content">
        <h1 className="Section-title">Top-Rated Movies</h1>
          <Latest searchValue={searchValue}/>
        </div>
        <Footer/>
      </header>
    </div>
  )
}

export default App;
