import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   google sign in
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();

      toast.success("Sign in successful");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* login with google */}
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/5"></span>

              <p className="text-xs text-center text-gray-500 uppercase">
                or login with Social Media
              </p>

              <span className="w-1/5 border-b  lg:w-1/5"></span>
            </div>

            <div className="flex items-center justify-center mt-6 -mx-2">
              <button
                onClick={handleGoogleLogin}
                className="bg-transparent w-full hover:bg-[#B0D9B1]  flex items-center text-gray-700 justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:text-white duration-300 transition-colors border px-8 py-2.5"
              >
                <svg
                  className="w-5 h-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3033_94454)">
                    <path
                      d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94454">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Sign in with Google</span>
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
    </div>
  );
};

export default Register;
