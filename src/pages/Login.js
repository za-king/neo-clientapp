import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

function Login() {
  const authcontext = useContext(AuthContext);

  const { Login,state } = authcontext;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (v) => {
    setUsername(v.target.value);
    
  };
  const handlePassword = (v) => {
    setPassword(v.target.value);
  };

  const handleLogin = () => {
    Login(username, password);
  };
  
  return (
    <div>
      <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-2xl rounded-lg px-8 pt-4 pb-8 mb-4">
            <div className="flex justify-center p-5 ">
              <div className="pr-2">
                <img
                  src="Neo-people-logo.png"
                  width={30}
                  height={30}
                  alt="neo"
                />
              </div>

              <p className="font-serif text-lg font-medium">Neo People</p>
            </div>
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(x) => {
                  handleUserName(x);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*******"
                onChange={(x) => {
                  handlePassword(x);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#FF5800] hover:bg-[#FF1800] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Masuk
              </button>
            </div>

            <div className="flex justify-center items-center pt-6">
              <Link to="/register">
                <button className="bg-[#FF5800] w-[200px] h-[35px] text-white rounded-full hover:bg-[#FF1800]  shadow-2xl shadow-yellow-500">
                  Buat Akun
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
