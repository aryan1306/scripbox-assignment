import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { currentEmpId } from "./utils/constants";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (currentEmpId) {
      return setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
export default App;
