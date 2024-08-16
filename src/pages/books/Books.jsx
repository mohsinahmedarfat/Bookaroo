import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import BookCard from "../../components/bookCard";

const Books = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/books");
      return data;
    },
  });

  console.log(books);

  books.map((book) => console.log(book));

  return (
    <div className="my-10">
      <h1>books are here...</h1>

      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book?._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
