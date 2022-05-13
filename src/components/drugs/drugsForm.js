import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
import { useHistory } from "react-router-dom";

function DrugsForm({ getDrugs }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [prDate, setPrDate] = useState("");
  const [exDate, setExDate] = useState("");
  const [authnumber] = useState("Pending");
  const [status] = useState("Pending");
  const history = useHistory();
  async function saveDrug(e) {
    e.preventDefault();

    try {
      const drugData = {
        name,
        type,
        prDate,
        exDate,
        authnumber,
        status,
      };
      await axios.post("http://localhost:5000/drug/", drugData, {
        withCredentials: true,
      });
      message.success("Drug created successfully");
      history.push("/dashboard");
    } catch (err) {
      console.error(err);
      message.error("Something went wrong");
    }
  }

  return (
    <div>
      <form onSubmit={saveDrug} className="p-20 ml-32">
        <h2 className="font-bold text-4xl text-center mb-5">
          Create a <span style={{ color: "orange" }}>Drug</span>
        </h2>
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Drug Type"
          onChange={(e) => {
            setType(e.target.value);
          }}
          value={type}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="date"
          placeholder="Production Date"
          onChange={(e) => {
            setPrDate(e.target.value);
          }}
          value={prDate}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="date"
          placeholder="Expiry Date"
          onChange={(e) => {
            setExDate(e.target.value);
          }}
          value={exDate}
        />

        <button
          type="submit"
          className="bg-orange-400 w-2/5 h-10 rounded-md shadow-xl ml-64"
        >
          Register Drug
        </button>
        <br />
        <Link to="/dashboard">
          <button className="bg-gray-900 h-full text-white ml-64 mt-10">
            Exit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default DrugsForm;
