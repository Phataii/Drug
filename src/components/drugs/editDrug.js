import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
import "antd/dist/antd.css";
import { message } from "antd";

export const EditDrug = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [drug, setDrug] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const drugId = match.params.id;

  useEffect(() => {
    async function fetchDrug() {
      setIsLoading(true);
      const res = await requestClient.get(`drug/${drugId}`);

      setDrug(res.data);
    }

    fetchDrug()
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [drugId]);

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(drug);

    try {
      const res = await requestClient.put(`/drug/${drugId}`, drug);
      console.log(res);
      history.push("/drug");
      message.success("Succesful!");
    } catch (err) {
      console.log(err);
      message.error("Something went wrong!");
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setDrug((old) => ({ ...old, [name]: value }));
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : drug ? (
        <form onSubmit={onFormSubmit} className="mt-10 p-40 ml-32">
          <h2 className="font-bold text-4xl  mb-5">
            <span style={{ color: "orange" }}>Drugs</span>
          </h2>
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="name"
            placeholder="Name"
            onChange={onInputChange}
            value={drug.name}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Type"
            name="type"
            onChange={onInputChange}
            value={drug.type}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="date"
            placeholder="Production Date"
            name="prDate"
            onChange={onInputChange}
            value={drug.prDate}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="date"
            name="exDate"
            placeholder="Expiry Date"
            onChange={onInputChange}
            value={drug.exDate}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Auth Number"
            name="authnumber"
            onChange={onInputChange}
            value={drug.authnumber}
          />
          {/* <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Status"
            name="status"
            onChange={onInputChange}
            value={drug.status}
          /> */}
          <select
            className="md:w-2/5 w-full h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            onChange={onInputChange}
            value={drug.status}
            name="status"
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Declined</option>
          </select>
          <button
            type="submit"
            className="bg-orange-400 w-2/5 h-10 rounded-md shadow-xl ml-64"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <p>Drug not found</p>
      )}
    </div>
  );
};
