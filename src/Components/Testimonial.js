// Modules
// Assets
import Quote from "../assets/icons/quote.svg";
import Stars from "../assets/icons/stars.svg";

const Testimonial = ({ title, clientQuote, clientName, clientLocation, clientImg, clientImgAlt }) => {

  return (
    <div className="testimonial-card">
      <div className="testimonial-heading">
        <div className="title-container">
          <h4>{title}</h4>
          <img src={Stars} alt="5 star rating" />
        </div>
        <div className="quote-graphic">
          <img src={Quote} alt="" />
        </div>
      </div>
      <p className="client-quote">{clientQuote}</p>
      <div className="client-details">
        <p><span className="client-name">{clientName},</span> <span className="client-location">{clientLocation}</span></p>
        <img src={clientImg} alt={clientImgAlt} />
      </div>
    </div>

  );
};

export default Testimonial;
