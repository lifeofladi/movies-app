// import {Component} from "react";

// Stateless Functional Component
const Like = (props) => {
  let { liked, onClick } = props;
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      className={classes}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
