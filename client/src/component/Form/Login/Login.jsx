/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import "../Login/style.css";

export default function Login() {
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
      <Link to={"/signup"}>
        <i className="ri-arrow-left-line"></i>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Login</button>
          <p>
            Don't have an account? <span><Link to={'/signup'}>Register Now</Link></span>
          </p>
        </div>
      </form>
    </div>
  );
}
