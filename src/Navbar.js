import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <p>the react project</p>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create" >new react page</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;