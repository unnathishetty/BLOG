import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const PF = "http://localhost:3001/images/";
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top-bar">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          <i className="sideBarIcon fa-brands fa-square-x-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          <i className="sideBarIcon fa-brands fa-square-instagram "></i>
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="">
              CONTACT
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to={"/settings"}>
            <img className="topImg" src={PF + user.profilePic} alt=" " />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
