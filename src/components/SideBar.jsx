/* eslint-disable react/prop-types */
import { BsBroadcastPin, BsGrid1X2Fill, BsFillGearFill } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
function SideBar({ openSidebarToggle, openSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsBroadcastPin className="icon_header" /> IOT Device
        </div>
        <span className="icon close_icon" onClick={openSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <RiHistoryFill className="icon" />
            History
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}
export default SideBar;
