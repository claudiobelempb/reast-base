import "./styles.css";

const Input = ({ searchValue, handleChange }) => {
  return (
    <div className={"input-container"}>
      <input
        type="search"
        onChange={handleChange}
        value={searchValue}
        placeholder={"Type your search"}
      />
    </div>
  );
};

export { Input };
