import React, { useState, useEffect } from "react";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FacebookLoginPage from "../FacebookLogin/FacebookLoginPage";

import BG from "../../assets/img/bg.png";

export default function RegisterPage() {
  const NAME_FACEBOOK = JSON.parse(localStorage.getItem("NAME_FACEBOOK"));
  const LINK_FACEBOOK = JSON.parse(localStorage.getItem("LINK_FACEBOOK"));
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")

  if (!NAME_FACEBOOK) {
    return <FacebookLoginPage url="/register" />;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  const handleSubmit = async () => {

  }

  return (
    <>
      {!loading ? (
        <LoadingComponent />
      ) : (
        <div>
          <NavbarComponent />
          <div
            className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
            style={{
              backgroundImage: `url('${BG}')`,
            }}
          >
            <div className="w-full max-w-sm">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="block text-gray-700 text-xl font-bold mb-4">CREATE ACCOUNT <p className="text-sm">สมัครสมาชิก</p></h1>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    User ID
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                    type="text"
                    placeholder="User ID"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="items-center justify-between mt-5">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline text-center"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
