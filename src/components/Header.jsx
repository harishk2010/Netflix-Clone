import logo from "../assets/logo/netflix.png";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="fixed w-full py-4 px-6 flex justify-between items-center "> 
      <div className="flex items-center ">
        <img src={logo} alt="" className="md:w-[150px] sm:w-[100px] w-[100px] pr-4" />
        
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
          <li>
            <IoSearch className="" />
          </li>
          <li>
            <a href="#">Children</a>
          </li>
          <li>
            <button className="bg-red-600 hover:bg-red-500 hover:border-white hover:border-2 px-3 py-2 rounded-full">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
