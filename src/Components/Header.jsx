import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/authSlice";

function Header() {
  const dispatch = useDispatch();

  const { IsLoggedIn } = useSelector((state) => state.auth);
  return (
    <header className=" bg-[#2D3338] p-4 flex justify-between">
      <p className="text-[22px] text-white">My Books</p>
      <button
        onClick={() => dispatch(logInOut())}
        class="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:border-white hover:text-white"
      >
        {IsLoggedIn ? "Logout" : "LogIn"}
      </button>
    </header>
  );
}

export default Header;
