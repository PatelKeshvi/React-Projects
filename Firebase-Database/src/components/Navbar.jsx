import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>My App</h2>
      {user ? <button onClick={handleLogout}>Logout</button> : <button onClick={() => navigate("/login")}>Login</button>}
    </nav>
  );
};

export default Navbar;
