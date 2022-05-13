import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
export default function Dashboard() {
  //   const [nav, setNav] = useState(true);
  const { loggedIn } = useContext(AuthContext);
  console.log("This", loggedIn);
  return (
    <div class="bg-secondary-100 text-gray-800 h-full md:h-screen">
      <div className="">
        <main class="px-16 py-6">
          <div className="card2 h-fit w-full p-2 shadow-2xl">
            {/* <h2 className="mt-3 p-2 text-green-600">Hi {loggedIn.email}</h2> */}
            <h4 class="font-bold text-3xl mt-2 text-center">
              WELCOME TO YOUR DASHBOARD
            </h4>
          </div>
          <header></header>

          <div>
            <div class="mt-8 grid lg:grid-cols-4 gap-5">
              {/* Cards go here */}
              <Link to="/drugs" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-yellow-500 rounded overflow-hidden shadow-3xl relative">
                  <div class="p-4 text-center">View Drugs</div>
                </div>
              </Link>
              <Link to="/regdrug" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-green-500 rounded overflow-hidden shadow-3xl relative">
                  <div class="p-4 text-center">Regsiter Drug</div>
                </div>
              </Link>
              <Link to="/search" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-red-500 rounded overflow-hidden shadow-3xl relative">
                  <div class="p-4 text-center">Check Drug status</div>
                </div>
              </Link>
              <Link to="/qrcode" className="text-gray-900 font-bold mr-10">
                <div class="hover:shadow-xl bg-blue-500 rounded overflow-hidden shadow-3xl relative">
                  <div class="p-4 text-center">Generate QR Code</div>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
