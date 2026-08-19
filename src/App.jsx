import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">
          <h2>My App</h2>
        </div>
        <div className="nav-links">
          <div className="hero">
            <h1>Welcome to My App</h1>
          </div>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <p>Hello, Vite + React! </p>
    </div>
  );
}

export default App;
