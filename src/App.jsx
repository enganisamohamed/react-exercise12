import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const searchUser = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>Search</button>

      {error && <p>{error}</p>}

      {user && (
        <div>
          <h2>{user.name}</h2>

          <img
            src={user.avatar_url}
            alt={user.name}
            width="150"
          />

          <p>
            <strong>Location:</strong>{" "}
            {user.location || "N/A"}
          </p>

          <p>
            <strong>Public Repos:</strong>{" "}
            {user.public_repos}
          </p>

          <p>
            <strong>Followers:</strong>{" "}
            {user.followers}
          </p>

          <p>
            <strong>Following:</strong>{" "}
            {user.following}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;