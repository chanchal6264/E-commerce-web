import React from "react";

function Admin() {
  return (
    <>
       
      <div className="flex justify-items-start w-[100%]">
        <div>
            <div className="border-2 p-2 m-4 w-[60%]">
                <div className="flex">
                    <p>--</p>
                    <p>User List</p>
                </div>
                <div className="flex">
                    <p>%%</p>
                    <p>Event Post</p>
                </div>
                <div className="flex">
                    <p>--</p>
                    <p>Booked Events</p>
                </div>
                <div className="flex">
                    <p>==</p>
                    <p>Post Category</p>
                </div>
                <div>
                    <p>Authentication</p>
                </div>
                <div className="flex">
                    <p>-+</p>
                    <p>Logout</p>
                </div>
            </div>
        </div>
        <div>
          <div className="border-2 flex bg-blue-500 text-white justify-around p-4 text-xl">
            <p>Admin</p>
            <p>Notification</p>
          </div>
          <div>
            <p>Post Event</p>
            <div >
                <input  className="bg-blue-500 rounded-lg p-2" type="file"/>
            </div>
            <div>
                <input className="border-2 rounded-lg p-2 m-2 w-[20%]" type="text" placeholder="Category_name*"/>
            </div>

            <div>
                <input className="border-2 rounded-lg p-2 m-2 w-[20%]" type="text" placeholder="URL*"/>
            </div>
            <div>
                <button className="border-2 text-white rounded-lg p-1 bg-blue-500 m-2 w-[20%]" type="text">POST</button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Admin;
