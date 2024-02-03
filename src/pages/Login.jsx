import { useState } from "react";
import Navbar from "../components/Navbar";
import { EMP_IDS } from "../utils/constants";

const Login = ({ setIsLoggedIn }) => {
  const [empId, setEmpId] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (EMP_IDS.includes(empId)) {
      setIsError(false);
      setIsLoggedIn(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar isHome={false} />
      <h1 className="text-center text-5xl font-bold text-white mt-9">
        Welcome to Hack Ideas
      </h1>
      <div className="md:w-96 w-1/2 mx-auto rounded-lg bg-white p-6 mt-16 md:h-64">
        <h2 className="text-3xl font-bold text-cyan-500 mb-4 text-center mt-1">
          Login
        </h2>
        <label htmlFor="empId">Employee ID</label>
        <input
          type="text"
          name="empId"
          id="empId"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          className="border border-blue-400 focus:ring-2 focus:ring-cyan-500 rounded-md w-full h-9 px-2 outline-none mt-2"
        />
        <div className="flex justify-center w-full">
          <button
            id="SUBMIT_BTN"
            type="submit"
            disabled={!empId}
            onClick={handleClick}
            className="bg-cyan-500 drop-shadow-md rounded-md py-2 px-3 tracking-wide text-white mt-7 disabled:bg-slate-500 disabled:drop-shadow-none disabled:text-slate-300"
          >
            Submit
          </button>
        </div>
        <p className="text-red-500 text-center mt-2">
          {isError && "Incorrect Employee ID entered, try again!"}
        </p>
      </div>
    </div>
  );
};
export default Login;
