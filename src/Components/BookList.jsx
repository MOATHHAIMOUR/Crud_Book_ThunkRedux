import { useSelector } from "react-redux";
import { Book } from "./Book";

function BookList({ setBookDetail }) {
  const { books, status } = useSelector((state) => state.book);

  return (
    <div className="flex flex-col w-[500px] h-[260px] mt-4  overflow-y-auto">
      <p className="text-2xl">Book List</p>
      {status === "loading" && <p>Loading...</p>}

      {status === "received" && (
        <div className="mt-4 w-full flex flex-col justify-between gap-6">
          {books.map((b) => (
            <Book key={b.id} book={b} setBookDetail={setBookDetail} />
          ))}
        </div>
      )}

      {status === "error" && <p>there was an error please try again later</p>}
    </div>
  );
}

export default BookList;
