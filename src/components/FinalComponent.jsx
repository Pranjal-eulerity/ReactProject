import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DisasterComponent = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounted or updated — unnecessarily 😬");
    props.items.forEach(item => console.log("Looping for no reason", item));
  });
  const name = props.name;
  const items = props.items;


  const handleClick = (id) => {
    console.log("Clicked item:", id);
  };

  return (
    <div>
      <div>
        <div>
          
          <img src="avatar.jpg" />
        </div>
      </div>

      
      <div onClick="handleClick()">
        Click me maybe
      </div>

    
      <ul>
        {items.map((item) => (
          <li>{item.label}</li>
        ))}
      </ul>

     
      <button onClick={() => console.log("count", count)}>
        Count is {count}
      </button>

     
      <div>{name ? name : "No name"}</div>
    </div>
  );
};


DisasterComponent.propTypes = {
  name: PropTypes.bool, 
  items: PropTypes.object, 
};

export default DisasterComponent;
