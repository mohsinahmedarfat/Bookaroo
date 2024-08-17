import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photo, email, password } = data;
    console.log(data);

    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photo);

      toast.success("Register Successfull.");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="hero bg-[#E1F0DA] min-h-screen py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-center text-3xl font-bold">Register Now!</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <small className="text-red-400 mt-2">
                This field is required
              </small>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="photo"
              placeholder="photo"
              className="input input-bordered"
              {...register("photo")}
            />
          </div>

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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#B0D9B1] hover:bg-[#D6EFD8] hover:border hover:border-[#508D4E]">
              Register
            </button>
          </div>
          <div>
            <h1 className="text-center">
              Already have an account?{" "}
              <span className="underline hover:text-[#1A5319]">
                <Link to="/login">Login here.</Link>
              </span>{" "}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
