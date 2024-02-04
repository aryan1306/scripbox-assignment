const Pill = ({ label, id, value, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="pill-btn px-2 py-1">
        {label}
        <input
          type="checkbox"
          name={id}
          id={id}
          value={value}
          className="ml-2"
          {...rest}
        />
      </label>
    </>
  );
};

export default Pill;
