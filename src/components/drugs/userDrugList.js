import React from "react";

function DrugsList({ drugs }) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">
        <span style={{ color: "orange" }}>List of </span>Drugs
      </h1>
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Type</th>
              <th className="border border-slate-300">Production DATE</th>
              <th className="border border-slate-300">Expiry Date</th>
              <th className="border border-slate-300">Auth Number</th>
              <th className="border border-slate-300">Status</th>
              <th className="border border-slate-300">ID</th>
            </tr>
          </thead>

          <tbody>
            {drugs.map((item, i) => (
              <tr key={item._id} className="text-center">
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.prDate}</td>
                <td>{item.exDate}</td>
                <td>{item.authnumber}</td>
                <td>{item.status}</td>
                <td>{item._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DrugsList;
