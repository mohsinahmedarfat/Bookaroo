import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center h-[calc(100vh-124px)]">
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#1A5319] to-[#80AF81] inline-block text-transparent bg-clip-text">
            Bookaroo
          </span>
        </h1>

        {user ? (
          <div>
            <h1 className="font-semibold text-2xl">
              Browse{" "}
              <span className="underline hover:text-[#1A5319]">
                <Link>Books</Link>
              </span>
            </h1>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn bg-[#B0D9B1] mr-3">Sign in</button>
            </Link>
            <Link to="/register">
              <button className="btn bg-[#B0D9B1]">Sign up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
