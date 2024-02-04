const Navbar = ({ isHome, setIsLoggedIn }) => {
  return (
    <div
      className={`h-20 w-full ${
        isHome
          ? "flex items-center justify-between bg-cyan-400 drop-shadow-lg"
          : "bg-white/30 backdrop-blur-3xl"
      } flex items-center drop-shadow-lg`}
    >
      <h1 className="ml-6 text-3xl font-bold text-white">Hack Ideas</h1>
      {isHome && (
        <span
          onClick={() => {
            localStorage.removeItem("empId");
            setIsLoggedIn(false);
          }}
          className="mr-6 cursor-pointer font-semibold text-white"
        >
          Logout
        </span>
      )}
    </div>
  );
};

export default Navbar;
