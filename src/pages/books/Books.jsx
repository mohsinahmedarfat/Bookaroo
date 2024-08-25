import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import BookCard from "../../components/bookCard";
import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const Books = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  // const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  console.log(search);

  const [booksPerPage, setBooksPerPage] = useState(9);
  const [countTotalData, setCountTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getData = async () => {
  //     const { data } = await axiosPublic.get(
  //       `/all-books?page=${currentPage}&size=${booksPerPage}&filter=${filter}&sort=${sort}&search=${search}`
  //     );
  //     setBooks(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, [booksPerPage, currentPage, filter, sort, search]);

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books", booksPerPage, currentPage, filter, sort, search],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/all-books?page=${currentPage}&size=${booksPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      );
      return data;
    },
  });

  useEffect(() => {
    const getCountData = async () => {
      const { data } = await axiosPublic.get(
        `/books-count?filter=${filter}&search=${search}`
      );
      setCountTotalData(data.count);
    };
    getCountData();
  }, [filter, search]);

  console.log(books);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const numberOfPages = Math.ceil(countTotalData / booksPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  // handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  // handle reset button
  const handleResetButton = () => {
    setFilter("");
    setSort("");
    setSearch("");
  };

  if (isLoading)
    return (
      <div className="flex justify-center h-[calc(100vh-121px)] items-center">
        <span className="loading loading-spinner loading-md bg-[#1A5319]"></span>
      </div>
    );

  return (
    <div className="my-10">
      <ScrollRestoration></ScrollRestoration>
      {/* <div>
        <form onSubmit={handleSearch}>
          <div className="mb-10 flex justify-end">
            <input
              name="search"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="ml-3 px-5 py-[14px] text-sm tracking-wide font-medium transition-colors duration-200 bg-[#B0D9B1] rounded-lg shrink-0 sm:w-auto">
              Search
            </button>
          </div>
        </form>
      </div> */}

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
        {/* reset button */}
        <button onClick={handleResetButton} className="btn">
          Reset
        </button>

        {/* filter */}
        <div>
          <select
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            value={filter}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Fiction">Fiction</option>
            <option value="Educational">Educational</option>
            <option value="Comics">Comics</option>
          </select>
        </div>

        {/* sort */}
        <div>
          <select
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Price</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>

        {/* search */}
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Book Name"
              aria-label="Enter Book Name"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book?._id} book={book}></BookCard>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#298127]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`${
              currentPage === btnNum ? "bg-[#298127] text-white" : ""
            } hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#298127]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#298127] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Books;
