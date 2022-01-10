import {
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineCheckSquare,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  const navClass = isNavOpen ? "nav active" : "nav";

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const hideNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={navClass}>
      <div className="nav__close-icon" onClick={hideNav}>
        <AiOutlineCloseSquare className="icon" />
      </div>
      <div className="nav-brand">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <AiOutlineCheckSquare className="icon" />
          <h3>To do</h3>
        </li>
        <li>
          <AiOutlineCalendar className="icon" />
          <h3>Notices</h3>
        </li>
        <li>
          <MdOutlineEmojiEvents className="icon" />
          <h3>Events</h3>
        </li>
        <li>
          <FaChalkboardTeacher className="icon" />
          <h3>Staff</h3>
        </li>
        <li>
          <BiError className="icon" />
          <h3>Logout</h3>
        </li>
      </ul>

      <div className="more" onClick={toggleNav}>
        <AiOutlineArrowRight className="icon" />
      </div>
    </nav>
  );
};

export default Navigation;
