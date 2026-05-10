import { FaLeaf } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaLeaf />
        PlantStore
      </div>

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#plants">Plants</a>
        </li>

        <li>
          <a href="#reviews">Reviews</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

      </ul>

      <a href="#plants">
        <button>Shop Now</button>
      </a>

    </nav>
  );
}

export default Navbar;