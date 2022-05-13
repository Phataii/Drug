import React, { useEffect, useState } from "react";
import DrugList from "./drugList";
import { Link } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
function Drug() {
  const [drugs, setDrugs] = useState([]);
  async function getDrugs() {
    const drugsRes = await requestClient.get("drug/");
    setDrugs(drugsRes.data);
  }

  useEffect(() => {
    getDrugs();
  }, []);

  return (
    <div>
      <Link to="/dashboard">
        <button className="bg-gray-900 text-white h-full p-2 text-xl">
          Exit
        </button>
      </Link>
      {/* <DrugForm drugs={drugs} /> */}
      <DrugList drugs={drugs} />
    </div>
  );
}

export default Drug;
