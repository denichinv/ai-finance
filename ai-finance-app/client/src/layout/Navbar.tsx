import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add</Link>
      <Link to="/goals">Goals</Link>
    </nav>
  );
}
