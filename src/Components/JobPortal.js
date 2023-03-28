import { Link } from "react-router-dom";

const JobPortal = () => {
  return (
    <section className="job-portal-section">
      <div className="job-portal-gradient">
        <div className="job-portal-container wrapper">
          <div className="portal-left">
            <h3>Complete Job Portal for Everyone</h3>
          </div>
          <div className="portal-right">
            <p>Find your dream job & earn from the world's leading brands.</p>
            <div className="job-portal-buttons ">
              <Link className="looking-for-job-link button-link-square">Looking for a job?
              </Link>
              <Link className="start-hiring-link button-link-square">Start Hiring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default JobPortal;