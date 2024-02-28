import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main-yel.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        <div className="info">
          <h1>
            BeeHive <span>Monitoring</span> System
          </h1>
          <p>
            I&apos;m baby master cleanse locavore gochujang, air plant neutral
            milk hotel salvia whatever tbh same mlkshk sus food truck keffiyeh.
            Ascot godard man bun tumblr shaman mumblecore intelligentsia.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
