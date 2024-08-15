const Books = () => {
  return (
    <div className="">
      <h1>books are here...</h1>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="p-5 bg-gray-100">
          <img
            src="https://i.ibb.co/0y8yMqW/A-Culture-of-Promise.jpg"
            className="w-2/3 rounded-md"
          />
        </figure>
        <div className="card-body p-4 items-center text-center">
          <h2 className="card-title">A Culture of Promise</h2>
          <p>
            Explores the foundations of building a culture rooted in trust,
            transparency, and promise.
          </p>
          <div className="font-">
            <span>Non-Fiction</span> <span className="mx-2 font-bold">|</span>{" "}
            <span>4.5</span> <span className="mx-2 font-bold">|</span>{" "}
            <span>01/08/2024</span>
          </div>
          <h2 className="text-2xl font-medium">$18.99</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
