import PropTypes from "prop-types";
import "./input.css";

const Input = ({ handleChange }) => {
  return (
    <input
      className="input"
      placeholder="Add color name"
      onChange={handleChange}
    ></input>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func,
};

export default Input;
