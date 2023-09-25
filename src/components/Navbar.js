import { useState } from "react";
import { useEffect } from "react";

const Navbar = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value)
    }

    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

    return (
        <div className={`Nav ${scrolling ? "scrolling" : ""}`}>
            <h1 className="Nav-title">XanaMovieSpace</h1>
            <input className="Movie-search" placeholder="Find your movie" value={searchValue} onChange={handleSearch}/>
            
            <ul className="Nav-link">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            </ul>
        </div>
    )
}

export default Navbar;