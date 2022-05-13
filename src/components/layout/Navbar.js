import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {
  const [nav, setNav] = useState(true);
  const { loggedIn } = useContext(AuthContext);

  return (
    <div class="bg-gray-900">
      <div class="h-full">
        <nav class="md:flex md:justify-around ">
          <div class="flex justify-between">
            <h1 class="font-bold uppercase p-4 text-white text-3xl">
              <a href="/" class="hover:text-gray-200">
                DRUG AUTH
              </a>
            </h1>
            <div
              class="cursor-pointer md:hidden mx-10 mt-6"
              onClick={() => setNav(!nav)}
            >
              <svg
                class="w-6 ml-2"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
          {nav && (
            <ul class="text-md md:mt-6 md:flex md:justify-around">
              <li className="py-1">
                {!loggedIn && (
                  <>
                    <Link to="/register">
                      <span className="md:ml-5 p-3 rounded-md text-gray-200 font-bold text-sm md:ring-2 ring-blue-500/50 md:bg-white md:text-gray-900 hover:text-blue-500 duration-700">
                        Open account
                      </span>
                    </Link>
                    <Link
                      to="/login"
                      className="md:ml-5 p-3 rounded-md text-gray-200 font-bold text-sm md:ring-2 ring-blue-500/50  hover:bg-white hover:text-gray-900 duration-700"
                    >
                      Sign in
                    </Link>
                  </>
                )}
                {loggedIn && (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-gray-200 font-bold mr-10"
                    >
                      Dashboard
                    </Link>

                    <LogOutBtn />
                  </>
                )}
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
