import React, { useEffect, useLayoutEffect } from "react";

import { StyleController } from "./style.controller";

import  Text  from "./components/Text";
import  Images  from "./components/Images";
import { animateOnSelect } from "../../../util/gsap";
import Templates from "./components/Templates";
import Customize from "./components/customize";
import Graphics from "./components/graphics";

const Controller = ({selectedField, animation}) => {

  useLayoutEffect(() => {
     animateOnSelect("init-animation")
  }, [selectedField])

  useEffect(() => {
    console.log("yoyoyyo");
 }, [])
 useLayoutEffect(() => {
  console.log("yoyoyyo"2);
}, [selectedField])
useLayoutEffect(() => {
  console.log("yoyoyyo1");
  const sum=1+2
  console.log(sum);//sum should be 4
  
}, [selectedField])

  const Component = () => {
    switch(selectedField) {
      case 'text': return <Text />
      case 'images': return <Images/>
      case 'templates': return <Templates/>
      case 'customize': return <Customize  animation={animation} />
      case 'graphics': return <Graphics />
      default: return <Text/>
    }
  }
  return (
    <StyleController className="section controller">
      <div className="init-animation">
        {Component()}
      </div>
    </StyleController>
  );
};

export default Controller;
