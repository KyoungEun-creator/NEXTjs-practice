import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">link to home</Link>
        </li>
        <li>
          <Link to="/about">link to about</Link>
        </li>
        <li>
          <Link to="/write">link to write</Link>
        </li>
        <li>
          <Link to="/detail">link to detail</Link>
        </li>
      </ul>
      <button onClick={() => navigate("/about")}>Go About</button>
    </>
  );
};

export default Home;
