// Modules
import { Link } from "react-router-dom";
// Pages
import JobListings from '../Pages/JobListings';
// Components
import GuidesCard from "./GuidesCard";
// Assets
import Person1 from "../assets/images/woman-on-laptop.jpg"
import Person2 from "../assets/images/woman-on-laptop-1.jpg"
import Person3 from "../assets/images/people-looking-at-laptop-together.jpg"

const JobiGuidesSection = () => {

    // Guide Card Content
    const guideCards = [
      {
        title: `Challenge yourself and win the future`,
        date: `23 July, 2022`,
        guideContent: `This response is important for our ability to learn from mistakes, but words...`,
        img: Person1,
        imgAlt: `Woman on laptop in her living room.`
      },
      {
        title: `Challenge yourself and win the future`,
        date: `23 July, 2022`,
        guideContent: `This response is important for our ability to learn from mistakes, but words...`,
        img: Person2,
        imgAlt: `Woman on laptop in a corporate space.`
      },
      {
        title: `Challenge yourself and win the future`,
        date: `23 July, 2022`,
        guideContent: `This response is important for our ability to learn from mistakes, but words...`,
        img: Person3,
        imgAlt: `Two women sharing a laptop and laughing.`
      }
    ];


  return (
    <section className="jobi-guides-section wrapper">
      <div className="heading-box">
        <h3>Jobi Guides</h3>
        <div className="categories-link-box">
          <Link to={'/job-listings'} element={<JobListings />} className="explore-jobs-link">Explore More
          </Link>
        </div>
      </div>
      <ul className="guides-ul">
        {guideCards.map(
          ({ title, date, guideContent, img, imgAlt }) =>
            (<GuidesCard title={title} date={date} guideContent={guideContent} img={img} imgAlt={imgAlt}/>)
        )}
      </ul>
    </section>
  )
};

export default JobiGuidesSection;