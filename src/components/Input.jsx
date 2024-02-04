const Input = ({ label, id, name, w, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={!name ? id : name}
        id={id}
        className={`mt-2 h-9 rounded-md border border-blue-400 px-2 outline-none focus:ring-2 focus:ring-cyan-500 ${
          w ? w : "w-full"
        }`}
        {...rest}
      />
    </div>
  );
};

export default Input;
