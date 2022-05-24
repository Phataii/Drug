import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
export default function UserSearch() {
  const [drugs, setDrugs] = useState([]);
  const [authnumber, setauthnumber] = useState("");

  async function searchDrug(e) {
    e.preventDefault();
    try {
      const qrData = {
        authnumber,
      };
      const res = await axios.post("http://localhost:5000/drug/nafdac", qrData);
      message.success("Drug details retrieved successfully");
      setDrugs(res.data);
    } catch (err) {
      console.error(err);
      message.error("Invalid Drug ID.");
    }
  }

  return (
    <div className="">
      <form onSubmit={searchDrug} className="mt-56 md:ml-96 ml-3">
        <Link to="/" className="text-white font-bold">
          <div class="hover:shadow-xl bg-gray-500 w-32">
            <div class="p-4 text-center">GO BACK</div>
          </div>
        </Link>
        <input
          onChange={(e) => setauthnumber(e.target.value)}
          type="text"
          className="md:w-2/5 h-10 shadow-xl border-2 border-gray-700 p-2 mb-3 text-gray-900"
          placeholder="Search drug"
        />
        <input
          type="submit"
          value="Search"
          className="bg-green-500 w-20 h-10 mt-3"
        />
      </form>

      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-center">Check Your Drug</h1>
          <div className="md:p-56 md:-mt-48">
            <table className="md:w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300">Name</th>
                  <th className="border border-slate-300">Type</th>
                  <th className="border border-slate-300">Prod Date</th>
                  <th className="border border-slate-300">Expiry Date</th>
                  <th className="border border-slate-300">Auth Number</th>
                  <th className="border border-slate-300">Status</th>
                  <th className="border border-slate-300">Drug ID</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-center">
                  <td>{drugs.name}</td>
                  <td>{drugs.type}</td>
                  <td>{drugs.prDate}</td>
                  <td>{drugs.exDate}</td>
                  <td>{drugs.authnumber}</td>
                  <td>{drugs.status}</td>
                  <td>{drugs._id}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
