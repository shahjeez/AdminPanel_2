import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'>Shahjee</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/users' style={{ textDecoration: "none" }}>
              <GroupIcon className='icon' />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to='/products' style={{ textDecoration: "none" }}>
              <StoreIcon className='icon' />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to='/orders' style={{ textDecoration: "none" }}>
              <InventoryIcon className='icon' />
              <span>Orders</span>
            </Link>
          </li>
          <p className='title'>USER</p>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};
export default Sidebar;
