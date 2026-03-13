import Users from "./components/Users";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo-mark" />
          <div>
            <h1 className="app-title">UserScope</h1>
            <p className="app-subtitle">Live data · JSONPlaceholder API</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Users />
      </main>
    </div>
  );
}
