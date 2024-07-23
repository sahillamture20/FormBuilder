import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Link to={"/login"}>
        <i className="ri-arrow-left-line"></i>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
          />
          <div className="error">
            <p className="error">{errors.username?.message}</p>
          </div>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          <div className="error">
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
          </div>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          <div className="error">
            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="errorMsg">
                Password should be at-least 6 characters.
              </p>
            )}
          </div>
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            placeholder="**********"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          <div className="error">
            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="errorMsg">
                Password should be at-least 6 characters.
              </p>
            )}
          </div>
        </div>
        <div className="form-control">
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
