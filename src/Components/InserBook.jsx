import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../store/BookSlice";

function InsertBook() {
  const title = useRef(null);
  const price = useRef(null);
  const desc = useRef(null);

  const dispatch = useDispatch();
  function HandleSubmit(e) {
    e.preventDefault();
    const bookData = {
      id: new Date().getTime(),
      title: title.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };
    title.current.value = null;
    price.current.value = null;
    desc.current.value = null;
    dispatch(insertBook(bookData));
  }
  const { IsLoggedIn } = useSelector((state) => state.auth);

  return (
    <form
      onSubmit={HandleSubmit}
      className="p-4 flex flex-col w-1/2 h-fit mx-auto gap-3 rounded-xl"
    >
      <p className="text-3xl">Insert Book</p>
      <div className="flex flex-col">
        <p className="text-[18px]">Title:</p>
        <input
          ref={title}
          className="p-2 rounded-xl border border-solid border-black"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[18px]">description:</p>
        <input
          ref={desc}
          type="text"
          className="p-2 rounded-xl border border-solid border-black"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[18px]">Price:</p>
        <input
          ref={price}
          type="number"
          className="p-2 rounded-xl border border-solid border-black"
        />
      </div>

      <button
        type="submit"
        disabled={!IsLoggedIn}
        className="bg-blue-500 text-white w-fit p-2 rounded-lg text-[18px]"
      >
        Submit
      </button>
    </form>
  );
}

export default InsertBook;
