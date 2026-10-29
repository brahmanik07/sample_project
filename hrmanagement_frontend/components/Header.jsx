import { Link } from "react-router-dom"
import './Header.css'
function Header() {
    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/About">about us</Link>
            <Link to="/contact">contact us</Link>
            <Link to="/Login">login</Link>
            <Link to="/Register">register</Link>
        </div>
    )
}
export default Header