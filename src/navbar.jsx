import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
    
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to={"/"} className="nav-link">ALL </Link>
        </li>
        <li className="nav-item">
          <Link to={"/Fsd"} className="nav-link" >Full Stack Development</Link>
        </li>
        <li className="nav-item">
          <Link to={"/Blockchain"} className="nav-link" >Blockchain</Link>
        </li>
        <li className="nav-item">
          <Link to={"/CyberSecurity"} className="nav-link " >Cyber Security
</Link>
        </li>
        <li className="nav-item">
          <Link to={"/DataScience"} className="nav-link" >Data Science
</Link>
        </li>
        <li className="nav-item">
          <Link to={"/Ui-Ux"} className="nav-link" >UI/UX Designing</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar