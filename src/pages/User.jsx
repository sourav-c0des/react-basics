// User.jsx
import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams();          // read current id from URL
  const navigate = useNavigate();

  const goToNextUser = () => {
    const nextId = Number(id) + 1;     // compute next id
    navigate(`/user/${nextId}`);       // navigate to new route
  };

  return (
    <div>
      <h1>User Page</h1>
      <p>You are viewing user with ID: {id}</p>

      <button onClick={goToNextUser} style={{ marginRight: 8 }}>
        Go to Next User ({Number(id) + 1})
      </button>

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default User;
