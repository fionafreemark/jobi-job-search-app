// Components
import Testimonial from "./Testimonial";
// import HeadingBarArrows from "./HeadingBarArrows";
// Assets
import Client1 from "../assets/images/portrait-of-man-in-blue.jpg";
import Client2 from "../assets/images/portrait-of-man-in-light-grey.jpg";
import LeftArrowBlack from "../assets/icons/back-arrow-icon-black.svg";
import RightArrowWhite from "../assets/icons/next-arrow-white.svg";

const ClientSection = () => {

  // Client Testimonial Content
  const testimonialContent = [
    {
      title: `Impressive!`,
      clientQuote: `Amazing theme, I'm using it for our internal process & procedures, and it's working very well.`,
      clientName: `Rashed Ka`,
      clientLocation: `Dhaka`,
      clientImg: Client1,
      clientImgAlt: `Headshot of man with blue background.`
    },
    {
      title: `Great work!!`,
      clientQuote: `One of the best places that I found experts. Highly recommend!`,
      clientName: `Zubayer Al Hasan`,
      clientLocation: `USA`,
      clientImg: Client2,
      clientImgAlt: `Headshot of man with grey background.`
    }
  ];

  // const headingH3 = "What do our clients think of us?";


  return (
    <section className="client-section">
      <div className="client-gradient">
        <div className="client-container wrapper">

          {/* <HeadingBarArrows headingH3={headingH3} /> */}
          <div className="heading-box">
            <h3>What do our clients <span>think of us?</span></h3>
            <div className="heading-button-box">
              <button type="button" title="previous" aria-label="previous" className="heading-button heading-icon-left-box client-icon-back">
                <img src={LeftArrowBlack} alt="" className="heading-icon client-icon-back" />
              </button>
              <button type="button" title="previous" aria-label="previous" className="heading-button heading-icon-right-box">
                <img src={RightArrowWhite} alt="" className="heading-icon" />
              </button>
            </div>
          </div> {/* End of heading-box */}
          <div className="testimonial-box">
            {testimonialContent.map(
              ({ title, clientQuote, clientName, clientLocation, clientImg, clientImgAlt }) =>
                (<Testimonial title={title} clientQuote={clientQuote} clientName={clientName} clientLocation={clientLocation} clientImg={clientImg} clientImgAlt={clientImgAlt} />)
            )}
          </div>
        </div>
      </div>
    </section>
  )
};

export default ClientSection;