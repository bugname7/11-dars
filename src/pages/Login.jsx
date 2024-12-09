import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eye from "../images/eye.jpg";
import backEye from "../images/backEye.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  function validate() {
    if (username.length <= 2) {
      alert("ism juda qisqa");
      return false;
    }

    if (password.length <= 3) {
      alert("password juda qisqa ");
      return false;
    }

    return true;
  }

  function handleLogin(event) {
    event.preventDefault();
    const isvalid = validate();
    if (!isvalid) {
      return;
    }
    const user = {
      username,
      password,
    };
    setLoader(true);
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signin`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        if (error.status == 404 || error.status == 401) {
          alert(error.message);
        }
      });
  }
  return (
    <div>
      <div className="bg-white w-[450px] mt-[100px] rounded-md  mx-auto border-solid border-2 border-sky-500 shadow-2xl  p-5">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form className="flex flex-col gap-3 ">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" border-solid border-2 border-sky-500 rounded-md  p-3 focus:outline-none mt-3 "
            type="text"
            placeholder="Your Username"
          />

          <div className="flex justify-between">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className=" border-solid border-2 w-full border-sky-500 rounded-md  p-3 focus:outline-none mt-3 "
              type={show ? "text" : "password"}
              placeholder="Your Password"
            />
            <img
              onClick={() => {
                setShow(!show);
              }}
              src={show ? eye : backEye}
              width="50px"
              height="30px"
              className="bg-transparent cursor-pointer"
              alt="back image"
            />
          </div>

          <button
            disabled={loader}
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-800 mb-2 mt-4  cursor-pointer text-white rounded-md py-3"
          >
            LOGIN
          </button>
          {loader ? "kutib turing...." : ""}
        </form>
        <div className="flex gap-4  ml-24 mt-2">
          <span className="">Hisobingiz mavjudmi?</span>
          <Link
            to={"/Register"}
            className="text-blue-700 hover:underline text-md "
          >
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
