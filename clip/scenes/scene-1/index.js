import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import {topMove}  from "../../library/topMove.js";
import {leftMove}  from "../../library/leftMove.js";
import {fontSize}  from "../../library/fontSize.js";
import {scaleBig}  from "../../library/scaleBig.js";

const template = (index) => {
  const clip = new HTMLClip({
    html,
    css,
    selector: "#root",
    containerParams: {
      width: "620px",
      height: "420px",
    },
    initParams: {
      styleSheet: "@initParams.styleSheet",
      info: `@initParams.slides[${index}]`,
    },
  });

  clip.addIncident(topMove("5%",".title",1500),0);
  clip.addIncident(leftMove("0%",".hightlight",1500),0);
  clip.addIncident(leftMove("5%",".image",1500),0);
  clip.addIncident(fontSize("30px",".bgt",1500),0);
  clip.addIncident(scaleBig(".logo",1500),0);


  return clip;
};


 

export default template;
