import { NavLink } from "react-router-dom"



function Navbar() {


    return (<>


        <nav>



            <ul className="Navbar">
                <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
                <li><NavLink className="nav-link" to='/Cuisine'>Cuisine</NavLink></li>
                <li><NavLink className="nav-link" to="/Query">Query</NavLink></li>
                <li><NavLink className="nav-link" to="/Diet">Diet</NavLink></li>
                <li><NavLink className="nav-link" to="/Info">Info</NavLink></li>
                <li><NavLink className="nav-link" to="/ApiInfo">Api Info</NavLink></li>
                <li><NavLink className="nav-link" to="/Account">Account</NavLink></li>

            </ul>

        </nav>




    </>)
}

export default Navbar