import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate("");

  async function updateUser() {
    const data = {name, email, password, setCpassword };
    console.log(data);
    await axios
      .patch(
        "http://localhost:9090/user/update/6544c4da39318f4b997c4fbe",
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <p>hello</p>
      <div className="border-2  grid place-content-center h-screen">
        <div className="border-2 p-5 rounded-xl border-red-500">
          <p className="pt-3 flex justify-center text-2xl">UPDATE PAGE</p>
          <div>
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-96 m-2 border-2 p-2 rounded-md border-red-500 hover:text-red-500"
                type="text"
                placeholder="First Name*"
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-96 m-2 border-2  p-2 rounded-md border-red-500"
                type="text"
                placeholder="Email Address*"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-96 m-2 border-2 p-2 rounded-md border-red-500"
                type="text"
                placeholder="Password*"
              />
            </div>
            <div>
              <input
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="w-96 m-2 border-2 p-2 rounded-md border-red-500"
                type="text"
                placeholder="confirmpassword*"
              />
            </div>
            <div className="justify-center flex">
              <button
                onClick={updateUser}
                className="text-white rounded-xl hover:border-red-500 hover:bg-white  hover:text-black border-2 p-2 w-48  my-4 font-semibold bg-indigo-500 "
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid place-content-center h-screen">
          <div className="bg-[#f3f3f1] shadow-2xl">
            <p className="flex justify-center font-bold pt-3">Update page</p>

            <div className="grid p-9">
              <label className="font-bold m-2 ">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />

              <label className="font-bold m-2">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />

              <label className="font-bold p-2 m-2">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label className="font-bold p-2 m-2">confirm Password</label>
              <input
                value={cpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <button onClick={updateUser} className="bg-slate-600 m-3 p-2 ">
                UPDATE
              </button>
            </div>
          </div>
        </div>*/}
    </>
  );
}

export default Update;
