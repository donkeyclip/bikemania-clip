import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";

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

  return clip;
};

export default template;
