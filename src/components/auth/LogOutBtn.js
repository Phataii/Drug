import { requestClient } from "../../utils/request-client";

function LogOutBtn() {
  async function logOut() {
    await requestClient.get("/auth/logout");

    window.location.href = "/";
  }

  return (
    <button
      onClick={logOut}
      className="text-white border border-orange-400 p-1 hover:bg-orange-400"
    >
      Log out
    </button>
  );
}

export default LogOutBtn;
