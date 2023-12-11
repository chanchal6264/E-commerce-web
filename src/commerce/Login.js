import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = { email, password };
    console.log(data, "login page");

    await axios
      .post("http://localhost:9090/user/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          navigate("/");
          localStorage.setItem("user", JSON.stringify(res.data.result));
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div className="border-2  grid place-content-center h-screen">
          <div className="border-2 p-5 rounded-xl border-red-500">
            <p className="pt-3 flex justify-center text-2xl">LOGIN</p>
            <div>
              <div>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}
                  className="w-[100%] m-2 border-2 p-2 rounded-md border-red-500"
                  type="text"
                  placeholder="Email Address*"
                />
              </div>
              <div>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}
                  className="w-[100%] m-2 border-2 p-2 rounded-md border-red-500"
                  type="text"
                  placeholder="Password*"
                />
              </div>
              <div className="flex m-2 text-xl">
                <input className="mt-2 mx-1" type="checkbox" />
                <p className="mt-2">Remember me</p>
              </div>

              <div className="justify-center flex">
               
                <button
                onClick={login}
                className="text-white rounded-xl hover:border-red-500 hover:bg-white  hover:text-black border-2 p-2 w-48  my-4 font-semibold bg-indigo-500 "
              >
                Login
              </button> 
              <button
                onClick={()=>navigate("/update")}
                className="text-white rounded-xl hover:border-red-500 hover:bg-white  hover:text-black border-2 p-2 w-48  my-4 font-semibold bg-indigo-500 "
              >
                Update
              </button>
              </div>
              <div className="flex text-blue-500 text-xl justify-around">
                <div>
                  <p onClick={()=>navigate("/update")} className="cursor-pointer hover:text-red-500">Forgot Password?</p>
                </div>
                <div>
                  <p className="mx-5">
                    don't have an account?{" "}
                    <span
                      className="text-red-500 text-xl hover:underline cursor-pointer"
                      onClick={() => navigate("/signup")}
                    >
                      Register
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="grid place-content-center h-screen">
          <div className="bg-[#f3f3f1] shadow-2xl">
            <p className="flex justify-center font-bold pt-3">LOGIN FORM</p>
            <div className="grid p-9">
              <label className="font-bold m-2">Email</label>
              <input
                type="text"
                placeholder="enter your email"
                className="p-2 border-"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="font-bold p-2 m-2">Password</label>
              <input
                type="text"
                placeholder="enter password"
                className="p-2 border-"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={login}
                className="rounded-full bg-slate-600 m-5 text-white p-3 hover:bg-white hover:text-slate-500 font-bold"
              >
                Login
              </button>
              <p>
                don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-slate-600 cursor-pointer font-bold"
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </>
  );
}

export default Login;
