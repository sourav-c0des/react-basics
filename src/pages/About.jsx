// About.jsx
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const goHomeReplace = () => navigate("/", { replace: true });

  return (
    <div>
      <h1>About Page</h1>
      <p>This is a demo app built to learn React concepts.</p>

      <button onClick={goHome} style={{ marginRight: 8 }}>
        Go Home
      </button>

      <button onClick={goBack} style={{ marginRight: 8 }}>
        Go Back
      </button>

      <button onClick={goHomeReplace}>
        Go Home (replace history)
      </button>
    </div>
  );
}

export default About;
