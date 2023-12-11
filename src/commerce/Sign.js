import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Sign() {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [lastname, setLastname]=useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");

  const signup = async () => {
    const data = { name, email, password, cpassword };
    console.log(data);
    navigate("/login")
    await axios
      .post("http://localhost:9090/user/signup", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          navigate("/login");
        } else {
          alert(res.data.success);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
     <div className="border-2  grid place-content-center h-screen">
        <div className="border-2 p-5 rounded-xl border-red-500">
          <p className="pt-3 flex justify-center text-2xl">Sign Up</p>
          <div>
            <div>
              <input 
               value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-red-500  m-2 border-2 p-2 rounded-md hover:border-red-500 hover:text-red-500"
                type="text"
                placeholder="First Name*"
              />
              <input
              value={lastname} onChange={(e)=>setLastname(e.target.value)}
                className="border-red-500  m-2 border-2 p-2 rounded-md"
                type="text"
                placeholder="Last Name*"
              />
            </div>
            <div>
              <input 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
                className="border-red-500 w-[97%] m-2 border-2 p-2 rounded-md"
                type="text"
                placeholder="Email Address*"
              />
            </div>
            <div>
              <input   value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-red-500 w-[97%] m-2 border-2 p-2 rounded-md"
                type="text"
                placeholder="Password*"
              />
            </div>
            <div>
              <input   value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="border-red-500 w-[97%]  m-2 border-2 p-2 rounded-md"
                type="text"
                placeholder="confirmpassword*"
              />
            </div>
            <div className="justify-center flex">
              <button
                onClick={signup}
                className="text-white rounded-xl hover:border-red-500 hover:bg-white  hover:text-black border-2 p-2 w-48  my-4 font-semibold bg-indigo-500 "
              >
                Register
              </button>
            </div>

            <div className="flex m-2">
              <input className="mt-2 " type="checkbox" />
              <p className="mx-2 text-xl">
                Already have an account{" "}
                <span
                  className="text-red-500 text-2xl hover:underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
