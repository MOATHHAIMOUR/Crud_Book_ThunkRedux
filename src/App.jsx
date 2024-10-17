import BookList from "./Components/BookList";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import { getBooks } from "./store/BookSlice";
import { useDispatch } from "react-redux";
import InsertBook from "./Components/InserBook";
import BookDetail from "./Components/BookDetial";

function App() {
  const dispatch = useDispatch();
  const [bookDetail, setBookDetail] = useState(null);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <InsertBook />
        <div className="h-[1px] mx-[200px]  bg-black"></div>
        <div className="flex justify-center gap-24 mx-10">
          <BookList setBookDetail={setBookDetail} />
          <BookDetail bookDetail={bookDetail} />
        </div>
      </main>
    </div>
  );
}

export default App;
