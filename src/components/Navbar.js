function Navbar(props) {
    return (
        <div className="Nav">
            <h1 className="Nav-title">XanaMovieSpace</h1>
            <input className="Movie-search" placeholder="Find your movie"/>
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