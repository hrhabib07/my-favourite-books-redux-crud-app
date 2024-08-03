import { useAppSelector } from "../app/hooks";

type TBook = {
  id: string;
  title: string;
  author: string;
  rating: number;
  price: number;
};

const BookList = () => {
  const books: TBook[] = useAppSelector((state) => state.booksR);
  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold">
          Welcome to <span className="uppercase text-green-800">BookList</span>{" "}
          app!
        </h1>
        <div className="my-8">
          <ol>
            {books.map((book) => (
              <div className="flex items-center">
                <li className="list-decimal" key={book.id}>
                  <span className="text-md font-semibold">{book.title} </span>{" "}
                  <span className="text-gray-700">- by {book.author}</span>
                </li>
                <button className="p-2 bg-green-700 text-white rounded ms-2 uppercase">
                  Edit{" "}
                </button>
                <button className="p-2 bg-red-700 text-white rounded ms-2 uppercase">
                  Remove{" "}
                </button>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookList;
