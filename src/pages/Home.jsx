// Home.jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");              // navigate to About page
  };

  const goToUser101 = () => {
    navigate("/user/101");           // navigate with a route param
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to React Practice App</p>

      {/* useNavigate examples */}
      <button onClick={goToAbout} style={{ marginRight: 8 }}>
        Go to About (useNavigate)
      </button>

      <button onClick={goToUser101}>
        Go to User 101 (useNavigate)
      </button>
    </div>
  );
}

export default Home;
