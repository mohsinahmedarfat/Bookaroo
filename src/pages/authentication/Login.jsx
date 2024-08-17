import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero bg-[#E1F0DA] min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-center text-3xl font-bold">Login Now!</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#B0D9B1]">Login</button>
          </div>
          <div>
            <h1 className="text-center">
              Do not have an account?{" "}
              <span className="underline hover:text-[#1A5319]">
                <Link to="/register">Register here.</Link>
              </span>{" "}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
