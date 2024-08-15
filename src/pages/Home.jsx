const Home = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-124px)]">
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#1A5319] to-[#80AF81] inline-block text-transparent bg-clip-text">
            Bookaroo
          </span>
        </h1>
        <button className="btn bg-[#B0D9B1] mr-3">Sign in</button>
        <button className="btn bg-[#B0D9B1]">Sign up</button>
      </div>
    </div>
  );
};

export default Home;
