import { useNavigation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SubmitBtn = ({ formBtn, onclick }) => {
  const navigation = useNavigation();

  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && "form-btn"} `}
      onClick={onclick}
    >
      Submit
    </button>
  );
};
export default SubmitBtn;
