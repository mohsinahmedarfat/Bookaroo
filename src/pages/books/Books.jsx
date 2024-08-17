import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import BookCard from "../../components/bookCard";

const Books = () => {
  const axiosPublic = useAxiosPublic();

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/books");
      return data;
    },
  });

  console.log(books);

  if (isLoading)
    return (
      <div className="flex justify-center h-[calc(100vh-64px)] items-center">
        <span className="loading loading-spinner loading-md bg-[#1A5319]"></span>
      </div>
    );

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book?._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
