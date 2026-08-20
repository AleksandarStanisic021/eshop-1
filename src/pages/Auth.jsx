import { useState } from "react";

export default function Auth() {
  const [mode, setMode] = useState("signup");

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? <>Sign Up</> : <>Login</>}
          </h1>
          <form className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? <>Sign Up</> : <>Login</>}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <>
                {" "}
                <p>
                  Already have an account?{" "}
                  <span className="auth-link">Login</span>
                </p>
              </>
            ) : (
              <p>
                Don't have an account?{" "}
                <span className="auth-link">Sign Up</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
