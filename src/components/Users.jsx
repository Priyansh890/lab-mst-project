import { useEffect, useState } from "react";
import { fetchUsers } from "../services/userService";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="state-container">
        <div className="spinner" />
        <p className="state-text">Loading users…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-container error">
        <span className="error-icon">⚠</span>
        <p className="state-text">{error}</p>
      </div>
    );
  }

  return (
    <section className="users-section">
      <header className="section-header">
        <h2 className="section-title">Directory</h2>
        <span className="badge">{users.length} users</span>
      </header>

      <ul className="user-list">
        {users.map((user, i) => (
          <li
            key={user.id}
            className="user-card"
            style={{ animationDelay: `${i * 55}ms` }}
          >
            <div className="avatar">{user.name[0]}</div>
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <a className="user-email" href={`mailto:${user.email}`}>
                {user.email}
              </a>
            </div>
            <span className="user-id">#{user.id}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
