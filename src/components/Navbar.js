function Navbar(props) {
    return (
        <div className="Nav">
            <h1 className="Nav-title">Xana Movie Space</h1>
            <input className="Movie-search" placeholder="Find your movie"/>
            <ul className="Nav-link">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            </ul>
        </div>
    )
}

export default Navbar;