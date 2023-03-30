// Modules
import { Link } from "react-router-dom";
// Assets
import Facebook from "../assets/icons/facebook-logo.svg"
import Instagram from "../assets/icons/instagram-logo.svg"
import Pinterest from "../assets/icons/pinterest-logo.svg"
import Square from "../assets/icons/square-shape-diagonal-stripe.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container wrapper">
        <div className="footer-nav-container">
          <nav className="footer-nav" aria-label="Secondary Navigation Menu">
            <div className="links-box">
              <div className="jobi-box">
                <div className="logo-container">
                  <div className="logo-circle-box circle-primary"></div>
                  <div className="logo-circle-box circle-secondary"></div>
                  <h4 className="jobi-h4">jobi</h4>
                  <div className="square-shape">
                    <img src={Square} alt="" />
                  </div>
                </div>
              </div> {/* End of jobi-box */}
              {/* LINKS UL--------------- */}
              <ul className="links-box-ul">
                <li >
                  <h4>Links</h4>
                </li>
                <li className="footer-accordion">
                  <Link className="footer-link" to={''} element={''}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Blog
                  </Link>
                </li>
              </ul>{/* End of links-box-ul */}
              {/*  PRODUCTS UL ----------------*/}
              <ul className="products-box-ul">
                <li>
                  <h4>Products</h4>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Take the tour
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Live chat
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Self-service
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Reviews
                  </Link>
                </li>
              </ul> {/* End of products-box-ul */}
              {/* LEGAL UL -------------------- */}
              <ul className="legal-box-ul">
                <li>
                  <h4>Legal</h4>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Terms & conditions
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={''} element={''}>
                    Cookie policy
                  </Link>
                </li>
              </ul> {/* End of legal-box-ul */}
              <div className="newsletter-box">
                <h4>Newsletter</h4>
                <label htmlFor="newsletter">Join & get important news updates.</label>
                <form action="">
                  <input type="email" id="newsletter" placeholder="Enter your email" min-length="5" />
                  <button type="submit" className="send-button">Send</button>
                </form>
                <p>We only send interesting and relevant emails.</p>
              </div>{/* End of newsletter-box */}
            </div> {/* End of links-box */}
          </nav>
        </div>{/* End of footer-nav-container */}
        <div className="footer-bottom-container">
          <div className="left-links">
            <Link className="footer-link-secondary" to={''} element={''}>
              Privacy & Terms.
            </Link>
            <Link className="footer-link-secondary" to={''} element={''}>
              Contact Us
            </Link>
          </div>
          <div className="copyright-text">
            <p>Copyright &#169; 2022 jobi inc.</p>
          </div>
          <ul className="social-links-ul">
            <li>
              <Link className="social-link" to={''} element={''}>
                <img src={Facebook} alt="Facebook Logo" className="social-icon" />
              </Link>
            </li>
            <li>
              <Link className="social-link" to={''} element={''}>
                <img src={Instagram} alt="Instagram Logo" className="social-icon" />
              </Link>
            </li>
            <li>
              <Link className="social-link" to={''} element={''}>
                <img src={Pinterest} alt="Pinterest Logo" className="social-icon" />
              </Link>
            </li>
          </ul>
        </div> {/* End of footer-bottom-container */}
      </div> {/* End of footer-container wrapper */}
    </footer>
  )
}

export default Footer;