import { useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaUser,
  FaLock,
} from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex lg:w-2/3 max-w-4xl">
          {/* Sign In Section starts here */}
          <div className="w-full md:w-3/5 p-5">
            <div className="text-left font-extrabold">
              <span className="text-green-500">Company</span> Name
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-1">
                Sign In to Account
              </h2>
              <div className="border-2 w-10 border-green-500 rounded-xl inline-block"></div>
              <div className="flex my-2 justify-center">
                <a
                  href=""
                  className="border-2 border-gray-200 rounded-full p-2 mx-1 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-105"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-gray-200 rounded-full p-2 mx-1 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-105"
                >
                  <FaGoogle className="text-sm" />
                </a>
                <a
                  href=""
                  className="border-2 border-gray-200 rounded-full p-2 mx-1 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-105"
                >
                  <FaTwitter className="text-sm" />
                </a>
              </div>

              <p className="text-gray-500 text-sm mb-5">
                Lorem ipsum dolor sit amet.
              </p>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 rounded-lg flex items-center px-2">
                  <FaUser className="text-sm text-gray-600" />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    className="bg-gray-100 text-xs ml-1 w-full p-2.5 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center mt-5">
                <div className="bg-gray-100 w-64 rounded-lg flex items-center px-2">
                  <FaLock className="text-sm text-gray-600" />
                  <input
                    type="text"
                    placeholder="Enter your password"
                    name="email"
                    className="bg-gray-100 text-xs ml-1 w-full p-2.5 outline-none"
                  />
                </div>
              </div>

              <div className="w-28 flex items-center mx-32 mt-3">
                <label className="flex  text-xs font-light">
                  <input
                    type="checkbox"
                    name="remember"
                    className="bg-green-500"
                  />
                  <span className="ml-1">Remember me</span>
                </label>
              </div>

              <button className="border-2 border-gray-100 rounded-full px-12 py-1.5 inline-block mt-12 font-semibold hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-700 ease-in-out transform hover:scale-105">
                Sign In
              </button>
            </div>
          </div>

          {/* Sign In Section ends here */}

          {/* Sign Up Section starts here */}
          <div className="hidden lg:block bg-green-500 w-2/5 rounded-tr-2xl rounded-br-2xl py-36 px-12 text-white">
            <h2 className="text-3xl font-bold mb-1">Hello, Friends!</h2>
            <div className="border-2 w-10 border-white rounded-xl inline-block"></div>

            <p className="mt-2 text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Pariatur, sint.
            </p>
            <a
              href=""
              className="border-2 border-white rounded-full px-12 py-1.5 inline-block mt-12 font-semibold hover:bg-white hover:text-green-500 transition duration-700 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </a>
          </div>
          {/* Sign Up Section ends here */}
        </div>
      </main>
    </div>
  );
}

export default App;
