import { useContext, useEffect } from "react";
import logo from "../assets/logo/netflix.png";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import avatar from "../assets/logo/Netflix-avatar.png";
import { toast } from "react-toastify";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  let ct = 0;
  useEffect(() => {
    if (user && ct < 1) {
      toast.success("Logged In");
      ct++;
    }
  }, [user]);

  const handleLogout = () => {
    toast.success("Logged Out");
    logOut();
  };
  return (
    <nav className="fixed w-full py-4 px-6 flex justify-between items-center ">
      <div className="flex items-center ">
        <img
          src={logo}
          onClick={() => navigate("/")}
          on
          alt=""
          className="md:w-[150px] cursor-pointer sm:w-[100px] w-[100px] pr-4"
        />

        <ul className="text-white hidden lg:flex gap-7">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> TV Shows </a>
          </li>
          <li>
            <a href="#"> Movies </a>
          </li>
          <li>
            <a href="#"> New & Popular </a>
          </li>
          <li>
            <a href="#"> My List</a>
          </li>
          <li>
            <a href="#"> Browse By Language</a>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="text-white flex items-center gap-8 ">
          <li className="hidden md:flex gap-7">
            <IoSearch />
          </li>
          <li className="hidden md:flex gap-7">
            <a href="#">Children</a>
          </li>
          {user ? (
            <>
              <li className="flex items-center gap-3">
                <img src={avatar} className="w-10 rounded-xl" alt="" />
                <p>{user?.displayName}</p>
              </li>

              <li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-black py-2 px-5 rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/login"}>
                <button className="bg-red-600 hover:bg-red-500 hover:border-white hover:border-2 px-3 py-2 rounded-full">
                  Sign In
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
