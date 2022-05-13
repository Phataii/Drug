import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import "antd/dist/antd.css";
import { message } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await requestClient.post("/auth/login", loginData);

      await getLoggedIn();
      history.push("/");
      message.success("Login successful");
    } catch (err) {
      console.error(err);
      message.error("Something went wrong!");
    }
  }

  return (
    <div className="">
      <img
        src={require("../../images/mobile.png").default}
        alt="BTC"
        className="mt-5 md:hidden"
      />
      <section className="bg-white mx-10 card2 my-24 md:ml-28">
        <div className="text-center p-5 mt-5">
          <h2 className="text-gray-600 text-2xl">Login to continue</h2>
        </div>
        <form onSubmit={login} className="md:ml-11 ml-5 mt-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@example.com"
            className="border-l-4 border-gray-700 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
          />
          <br />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border-l-4 border-gray-700 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
          />
          <br />

          <input
            type="submit"
            value="Login"
            className="p-2 mt-7 ml-20 rounded-sm md:w-2/5 cursor-pointer text-white bg-orange-400 opacity-75"
          />
        </form>

        <p className="p-2 text-gray-700 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold">
            Signup
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
