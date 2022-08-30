import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import neologo from "../icons/neo logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import AuthContext from "../context/auth/authContext";

function Header() {
  const [click, setClick] = useState(false);

  const authcontext = useContext(AuthContext);
  const { Logout, LoadUser, state } = authcontext;

  const handleClick = () => {
    setClick(!click);
  };
  const handleLogout = () => {
    Logout();
    LoadUser();
  };

  useEffect(() => {
    LoadUser();
  }, []);

  return (
    <>
      {click && (
        <aside
          className=" bg-white w-64  min-h-screen max-h-full left-0  
      inset-y-0 flex flex-col md:hidden transform fixed z-30
      translate-x-0 transition duration-200 ease-in-out
      "
        >
          <div className="border-r flex-grow">
            <nav>
              <ul className="">
                <li className="p-3 mt-20">
                  <Link to="/">Beranda</Link>
                </li>
                <li className="p-3">
                  <Link to="layanan">Layanan</Link>
                </li>
                <li className="p-3">
                  <Link to="team">Team</Link>
                </li>
                <li className="p-3">
                  <Link to="event">Events</Link>
                </li>

                <li className="p-3">
                  <Link to="formkonsul">konsultasi</Link>
                </li>
                <li className="p-3">
                  <Link to="petunjukpenggunaan">Petunjuk Penggunaan</Link>
                </li>
                <li className="p-3">
                  <Link to="faq">F.A.Q</Link>
                </li>

                <li className="p-3">
                  <Link to="login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}

      <div className=" bg-[#EBF0F3] w-full h-[60px] shadow-lg fixed  top-0 left-0 right-0 z-50 ">
        <div className="md:container md:mx-auto flex justify-between">
          <div className="flex  items-center cursor-pointer  md:hidden  p-2 ">
            <div
              className="px-4 cursor-pointer md:hidden"
              onClick={handleClick}
            >
              <div>
                {click ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="flex  items-center  ">
            <Link to="/">
              <img src={neologo} alt="fd" width={100} />
            </Link>
          </div>

          {/* <Sidebar /> */}
          <div className="flex flex-row items-center md:flex hidden space-x-5   ">
            <Link to="/" className="p-4">
              <p>Beranda</p>
            </Link>

            <Link to="layanan" className="p-4">
              <p>Layanan</p>
            </Link>

            <Link to="team" className="p-4">
              <p>Team</p>
            </Link>

            <Link to="event" className="p-4">
              <p>Event</p>
            </Link>

            <Link to="formkonsul" className="p-4">
              <p>Konsultasi</p>
            </Link>
            <Link to="petunjukpenggunaan" className="p-4">
              <p>Petunjuk Penggunaan</p>
            </Link>

            <Link to="faq" className="p-4">
              <p>F.A.Q</p>
            </Link>

            {state.user && (
              <div className="flex items-center">
                <Link to="profile" className="p-4">
                  <div className="flex flex-row items-center">
                    <FaRegUserCircle /> {state.user.username}
                  </div>
                </Link>

                <div onClick={handleLogout} className="p-4 cursor-pointer">
                  <p>Logout</p>
                </div>
              </div>
            )}

            {!state.user && (
              <Link to="login" className="p-4 ">
                <p>Login</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
