import React from "react";
import Login_img from "../Assets/login-img.jpg";

const login = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-blue-100 h-screen w-[50%] rounded-[70px]">
          <div className="mt-[15%] ml-[20%]">
            <div className="flex justify-start">
              <p className="font-bold text-[60px] ml-[120px] mb-5 font-sans">
                Login
              </p>
            </div>
            <form>
              <div className="flex gap-5 items-center">
                <div className="text-[23px] font-sans">
                  <div>
                    <label>Enter Username :</label>
                  </div>
                  <div className="mt-5">
                    <label>Enter Password : </label>
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      className="border border-solid border-black rounded-[50px] h-[50px] w-[300px]"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="password"
                      className="border border-solid border-black rounded-[50px] h-[50px] w-[300px]"
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-blue-700 p-2 rounded-[40px] text-lg text-white w-[100px] flex justify-center mt-6 font-bold  ml-[120px] font-sans">
                Login
              </button>
            </form>
            <div className="flex justify-start mt-7">
              <p className="text-sm">
                Do not have an account?{" "}
                <a className="font-bold" href="#">
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://imgs.search.brave.com/MkI_9IGTu-l-4xpwE9CollUY_tux2HBVJBzia4fbNGM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1yZW5kZXItc2Vj/dXJlLWxvZ2luLXBh/c3N3b3JkLWlsbHVz/dHJhdGlvbl8xMDc3/OTEtMTY2NDAuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
            alt="login-icon"
          />
        </div>
      </div>
    </div>
  );
};
//commit

//second
export default login;
