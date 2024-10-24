import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
            {/* When linking to other pages/routes */}
            {/* Use Link instead of a - this allows react to change */}
            {/* pages seamlessly - the browser does not reload */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Nav