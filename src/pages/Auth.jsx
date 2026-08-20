export default function Auth() {
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">Auth</h1>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
