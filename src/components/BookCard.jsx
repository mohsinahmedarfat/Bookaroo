import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const {
    bookName,
    bookImage,
    description,
    price,
    category,
    ratings,
    bookCreationDate,
  } = book;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-5 bg-gray-100">
        <img src={bookImage} className="w-2/3 h-[300px] rounded-md" />
      </figure>
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title">{bookName}</h2>
        <p>{description}</p>
        <div className="flex font-medium">
          <span>{category}</span>
          <span className="mx-2 font-bold">|</span>
          <span className="flex justify-center items-center gap-2">
            {ratings} <FaStar />
          </span>
          <span className="mx-2 font-bold">|</span>
          <span>{bookCreationDate}</span>
        </div>
        <h2 className="text-2xl font-medium">${price}</h2>
      </div>
    </div>
  );
};

export default BookCard;
