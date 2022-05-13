import React, { useEffect, useState } from "react";
import DrugsList from "./userDrugList";
import { Link } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
function UserDrugs() {
  const [drugs, setDrugs] = useState([]);
  async function getDrugs() {
    const drugsRes = await requestClient.get("drug/user");
    setDrugs(drugsRes.data);
  }

  useEffect(() => {
    getDrugs();
  }, []);

  return (
    <div>
      <Link to="/dashboard">
        <button className="bg-gray-900 text-white mt-32 ml-96 h-full">
          Exit
        </button>
      </Link>
      {/* <DrugForm drugs={drugs} /> */}
      <DrugsList drugs={drugs} />
    </div>
  );
}

export default UserDrugs;
