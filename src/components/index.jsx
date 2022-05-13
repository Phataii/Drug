import React from "react";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div className="text-justify text-gray-600">
      <div className="text-center">
        <button className="bg-orange-400 h-16 w-48 mt-5 italic uppercase text-red-500 text-xl">
          <span className="font-bold text-white">
            {/* <a href=""></a> */}
            <Link to="/search">Check Drug</Link>
          </span>
        </button>
      </div>

      <Link></Link>
    </div>
  );
}
