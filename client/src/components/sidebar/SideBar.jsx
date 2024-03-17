import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1638051/pexels-photo-1638051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="me"
          height={300}
          width={250}
        ></img>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          eligendi quos odit laborum at maxime recusandae laboriosam fugit.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sideBarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
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
            rel="noopener noreferrer"
            className="link"
          >
            <i className="sideBarIcon fa-brands fa-square-instagram"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
