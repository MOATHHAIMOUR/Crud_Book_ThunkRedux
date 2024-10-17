import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../store/BookSlice";

export function Book({ book, setBookDetail }) {
  const { IsLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <p className="text-[18px] ">{book.title}</p>
      <div className="flex gap-3  items-center">
        <button
          onClick={() => setBookDetail(book)}
          disabled={!IsLoggedIn}
          className="bg-blue-500 text-[18px] p-2 text-white"
        >
          Read
        </button>
        <button
          onClick={() =>
            dispatch(deleteBook(book.id)).then((data) => {
              console.log(data);
            })
          }
          disabled={!IsLoggedIn}
          className="bg-red-500 text-[18px] p-2 text-white "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
