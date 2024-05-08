import { useNavigate } from "react-router-dom";
import "../../styles/landingPage.css";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="landingContainerLeft">
        <div className="landingImage">
          <img src="src/assets/eating_page1_1.svg" alt="food bowl" height={300} />
        </div>

        <div className="landingContent">
          <div className="landingHeading">
            <h1> Eat Healthy </h1>
          </div>

          <div className="landingPara">
            <p>Maintaining good health should be the primary</p>
            <p>focus of everyone</p>
          </div>
        </div>
      </div>
      <div className="landingContainerRight">
        <div className="landingImage">
          <img src="src/assets/eating_page1_2.svg" alt="food bowl" height={300} />
        </div>
        <div className="landingContent">
          <div className="landingHeading">
            <h1> Know your Nutrition </h1>
          </div>

          <div className="landingPara">
            <p>Browse thousands of healthy recipes</p>
            <p>from all over the world</p>
          </div>
        </div>
        </div>

      <div className="signUpButton">
        <button onClick={() => navigate("/signup")}> Get Started </button>
      </div>
      <div className="landingPara">
        <p> Already Have An Account? <a href="/login"> Log in!</a></p>
      </div>
    </>
  );
};
