function BookDetail({ bookDetail }) {
  return (
    <div className="mt-4 flex flex-col">
      <p className="text-2xl">Book Details</p>
      {bookDetail != null ? (
        <>
          <p>name:{bookDetail.username}</p>
          <p>name:{bookDetail.title}</p>
          <p>name:{bookDetail.price}$</p>
          <p>name:{bookDetail.desc}</p>
        </>
      ) : (
        <p className=" bg-slate-400 p-2 rounded-xl mt-4 text-white">
          There is no post selected yet please chose one
        </p>
      )}
    </div>
  );
}

export default BookDetail;
