export default props => {
  console.log(props);
  return <div className="about_container">{props.children}</div>;
};
