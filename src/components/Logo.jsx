/* eslint-disable react/prop-types */
import logo from "../assets/images/logo2.svg";
const Logo = ({ h, w, ml, mt }) => {
  return (
    <img
      src={logo}
      alt="jobify"
      style={{ width: h, height: w, marginTop: mt, marginLeft: ml }}
    />
  );
};
export default Logo;
