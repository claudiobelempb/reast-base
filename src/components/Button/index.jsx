import "./styles.css";

const Button = ({ onClick, title, disabled }) => {
  return (
    <div className={"button-container"}>
      <button disabled={disabled} onClick={onClick}>
        {title ? title : "Button Default"}
      </button>
    </div>
  );
};

export { Button };
