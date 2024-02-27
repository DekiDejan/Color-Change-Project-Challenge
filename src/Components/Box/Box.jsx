import PropTypes from "prop-types";
import "./box.css";

const Box = ({ color }) => {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      <span>{color ? color : "Empty Value"}</span>
    </div>
  );
};

Box.propTypes = {
  color: PropTypes.string,
};

export default Box;
