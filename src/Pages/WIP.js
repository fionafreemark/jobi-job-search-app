// Modules
import { Link, useNavigate } from "react-router-dom";
// Pages


const Error = () => {

  const navigate = useNavigate();

  return (
    <><section className="wip-section wrapper">
      <h2 className="h2-wip">This Page Is a Work in Progress</h2>
      <p className="p-wip">Come back soon to see more features.</p>
      <Link className="return-button button-link-square" onClick={() => navigate(-1)} > Return to Previous Page</Link>
    </section>
    </>
  )
}

export default Error;