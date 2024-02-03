const Navbar = ({ isHome }) => {
  return (
    <div
      className={`w-full h-20 ${
        isHome ? "bg-cyan-400" : "backdrop-blur-3xl bg-white/30"
      } drop-shadow-lg flex items-center`}
    >
      <h1 className="text-white font-bold text-3xl ml-6">Hack Ideas</h1>
    </div>
  );
};

export default Navbar;
