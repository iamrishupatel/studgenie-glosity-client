import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { useState } from "react";

const Header = ({ openNav }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="header">
      <p>Hi, John</p>
      <img
        className="avatar"
        src="https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="profile-pic"
      />
      
      <AiOutlineSetting className="icon" onClick={handleClick} />
      <div className="hamburger" onClick={openNav}>
        <AiOutlineMenu className="icon" />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <AiOutlineUser className="icon" style={{ marginRight: "0.4rem" }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AiOutlineSetting
            className="icon"
            style={{ marginRight: "0.4rem" }}
          />
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AiOutlineLogout className="icon" style={{ marginRight: "0.4rem" }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
