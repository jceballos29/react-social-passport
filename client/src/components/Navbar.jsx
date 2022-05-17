import { Link } from "react-router-dom"

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <Link to="/" className="link logo">
        Lama App
      </Link>
      {
        user ? (<ul className="list">
        <li className="list__item">
          <img src="https://images.pexels.com/photos/7842865/pexels-photo-7842865.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="avatar"/>
        </li>
        <li className="list__item">John Doe</li>
        <li className="list__item">Logout</li>
      </ul>) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )
      } 
    </div>
  )
}

export default Navbar