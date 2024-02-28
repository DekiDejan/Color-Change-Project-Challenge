import PropTypes from "prop-types";
import "./input.css";

const Input = ({ setColor }) => {
  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <input
      autoFocus
      className="colorText"
      placeholder="Add color name"
      onChange={handleChange}
    ></input>
  );
};

Input.propTypes = {
  setColor: PropTypes.func,
};

export default Input;
