import {Component} from "react";

// Stateless Functional Component
const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) 
    classes += "-o";
  return (<i onClick={props.onClick} className={classes} style={{
      cursor: 'pointer'
    }}/>);

};

export default Like;
