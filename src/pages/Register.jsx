import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eye from "../images/eye.jpg";
import backEye from "../images/backEye.jpg";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  function validate() {
    if (username.length <= 2) {
      alert("ism juda qisqa");
      return false;
    }
    if (email.length <= 5) {
      alert("email juda qisqa ");
      return false;
    }
    if (password.length <= 3) {
      alert("password juda qisqa ");
      return false;
    }
    if (rePassword !== password) {
      alert("passwordlar bir xil emas ");
      return false;
    }
    return true;
  }

  function handleSave(event) {
    event.preventDefault();
    const isvalid = validate();
    if (!isvalid) {
      return;
    }
    const user = {
      username,
      email,
      password,
    };
    setLoader(true);
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signup`, user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message || error.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <div>
      <div className="bg-white w-[450px] mt-[100px] rounded-md  mx-auto border-solid border-2 border-sky-500 shadow-2xl  p-5">
        <h2 className="text-center text-2xl font-bold">Register</h2>
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
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" border-solid border-2 border-sky-500 rounded-md  p-3 focus:outline-none mt-3 "
            type="email"
            placeholder="Your Email"
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
          <div className="flex justify-between">
            <input
              value={rePassword}
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              className=" border-solid border-2 w-full border-sky-500 rounded-md  p-3 focus:outline-none mt-3 "
              type={show ? "text" : "password"}
              placeholder="Your RePassword"
            />
          </div>
          <button
            disabled={loader}
            onClick={handleSave}
            className="bg-blue-700 hover:bg-blue-800 mb-2 mt-4  cursor-pointer text-white rounded-md py-3"
          >
            REGISTER
          </button>
          {loader ? "kutib turing...." : ""}
        </form>
        <div className="flex gap-4  ml-24 mt-2">
          <span className="">Hisobingiz mavjudmi?</span>
          <Link
            to={"/login"}
            className="text-blue-700 hover:underline text-md "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
