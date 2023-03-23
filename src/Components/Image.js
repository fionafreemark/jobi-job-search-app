const Image = props => (
  <div>
    <p>This is the icon</p>
    <img className="icon" src={props.icon} alt="icon" />
  </div>
);

export default Image;