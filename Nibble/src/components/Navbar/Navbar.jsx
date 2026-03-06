import { Link } from "react-router-dom"



function Navbar(){


    return(<>


    <nav>


    
    <ul className="Navbar">
        <li><Link className="nav-link" to='/'>Home</Link></li>
        <li><Link className="nav-link" to='/Cuisine'>Cuisine</Link></li>
        <li><Link className="nav-link" to='/Query'>Query</Link></li>
        <li><Link className="nav-link" to='/Diet'>Diet</Link></li>
        <li><Link className="nav-link" to='/Info'>Info</Link></li>
        <li><Link className="nav-link" to='/ApiInfo'>Api Info</Link></li>
        <li><Link className="nav-link" to='/Account'>Account</Link></li>

    </ul>

    </nav>



    
    </>)
}

export default Navbar