//Assets
import GoogleIcon from "../assets/icons/google.png";
import ShipBobIcon from "../assets/icons/shipbob.png";
import DribbleIcon from "../assets/icons/dribble.png";
import SlackIcon from "../assets/icons/slack.png";
import VineIcon from "../assets/icons/vine.png";
import AirBnbIcon from "../assets/icons/airbnb.png";

const IconSection = () => {
  return (
    <section className="icon-section">
      <div className="icon-section-box wrapper">
      <img src={GoogleIcon} alt="Google Logo" />
      <img src={ShipBobIcon} alt="ShipBob Logo" />
      <img src={DribbleIcon} alt="Dribble Logo" />
      <img src={SlackIcon} alt="Slack Logo" />
      <img src={VineIcon} alt="Vine Logo" />
      <img src={AirBnbIcon} alt="AirBnb Logo" />
      </div>
    </section>
  )
};

export default IconSection;