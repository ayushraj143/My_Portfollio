import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Ayush Portfolio</h2>

      <div>
        <Link to="about" smooth={true}>About</Link>
        <Link to="skills" smooth={true}>Skills</Link>
        <Link to="projects" smooth={true}>Projects</Link>
        <Link to="contact" smooth={true}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;