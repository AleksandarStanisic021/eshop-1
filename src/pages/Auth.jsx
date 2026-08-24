import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function Auth() {
  const [mode, setMode] = useState("signup");

  const { signUp, user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function processForm(data) {
    signUp(data.email, data.password);
    console.log("process..", data);
    console.log("user", user);
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>User logged in {user.email}</p>}
          <h1 className="page-title">
            {mode === "signup" ? <>Sign Up</> : <>Login</>}
          </h1>
          <form onSubmit={handleSubmit(processForm)} className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password is less than 12 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
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
                  <span className="auth-link" onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>
              </>
            ) : (
              <p>
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
