// import { IoMdMail } from "react-icons/io";
import { Link} from "react-router-dom";
import "../styles/Navbar.scss";

const navLinks = [
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Team",
    id: "#team",
  },
  {
    name: "Partners",
    id: "#partners",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-xl">
      <div className="flex justify-around items-center h-20">
        <Link to="/">
          <img src="RedX.png" alt="redx" width={80} className="" />
        </Link>

        <div className="hidden md:flex justify-between gap-10 text-zinc-500 text-lg">
          {navLinks.map((link) => (
            <div className="navLink hover:underline active:underline underline-offset-8 rounded-full cursor-pointer hover:font-medium capitalize hover:scale-110 transition-transform duration-200 ease-out">
              <a href={link.id}>{link.name}</a>
            </div>
          ))}
        </div>

       
       <div className='flex w-52 justify-between'>
       <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn events bg-[#EA0000] px-5 text-white font-bold hover:bg-[#b11a1a]">
            Events
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu shadow rounded-box w-52 bg-[#101211] ">
            <li>
              <Link to='/events' className='active:bg-[#EA0000]' >Events</Link>
            </li>
            <li>
            <Link to='/membership' className='active:bg-[#EA0000]' >Membership</Link>
            </li>
            <li>
            <Link to='/history' className='active:bg-[#EA0000]' >History</Link>
            </li>
          </ul>
        </div>

        {/* <a
          href="mailto:prajnapprabhu3@gmail.com"
          className="hidden md:flex items-center font-bold text-sm rounded py-1.5 px-2  hover:scale-110 text-white duration-200 emailButton"
        >
          <IoMdMail className="text-xl mr-1" /> <p className="mr-1">Mail Us</p>
        </a> */}
       </div>
      </div>
    </nav>
  );
}

export default Navbar;
