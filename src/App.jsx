import { useState } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <>{isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}</>;
}
export default App;
