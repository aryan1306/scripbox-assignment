import { useState } from "react";
import { EMP_IDS } from "../utils/constants";
import Navbar from "../components/Navbar";
import Input from "../components/Input";

const Login = ({ setIsLoggedIn }) => {
  const [empId, setEmpId] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (EMP_IDS.includes(empId)) {
      localStorage.setItem("empId", empId);
      setIsError(false);
      setIsLoggedIn(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar isHome={false} />
      <h1 className="mt-9 text-center text-5xl font-bold text-white">
        Welcome to Hack Ideas
      </h1>
      <div className="mx-auto mt-16 w-1/2 rounded-lg bg-white p-6 md:h-64 md:w-96">
        <h2 className="mb-4 mt-1 text-center text-3xl font-bold text-cyan-500">
          Login
        </h2>
        <Input
          label="Employee ID"
          id="empId"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
        <div className="flex w-full justify-center">
          <button
            id="SUBMIT_BTN"
            type="submit"
            disabled={!empId}
            onClick={handleClick}
            className="primary-btn mt-7"
          >
            Submit
          </button>
        </div>
        <p className="mt-2 text-center text-red-500">
          {isError && "Incorrect Employee ID entered, try again!"}
        </p>
      </div>
    </div>
  );
};

export default Login;
