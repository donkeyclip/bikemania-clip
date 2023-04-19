import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { leftMove, opacity, topMove, scaleBig } from "../../library/index.js";
const template = (index) => {
  const clip = new HTMLClip({
    html,
    css,
    selector: `.slide-${index}`,
    containerParams: {
      width: "620px",
      height: "420px",
    },
    initParams: {
      styleSheet: "@initParams.styleSheet",
      info: `@initParams.slides[${index}]`,
    },
  });

  clip.addIncident(opacity(1, ".root", 1), 0);
  clip.addIncident(topMove("5%", ".title", 1000, "easeInOutQuint", "-100%"), 0);
  clip.addIncident(
    leftMove("0%", ".bg:nth-of-type(odd)", 3500, "linear", "120%"),
    0
  );
  clip.addIncident(
    leftMove("0%", ".bg:nth-of-type(even)", 3500, "linear", "-200%"),
    0
  );
  clip.addIncident(
    leftMove("0%", ".hightlight", 1500, "easeInOutQuint", "-100%"),
    0
  );
  clip.addIncident(
    leftMove("5%", ".image", 1500, "easeInOutQuint", "-100%"),
    500
  );
  clip.addIncident(scaleBig(".logo", 500, [0.86, 0, 0.07, 1]), 1500);
  clip.addIncident(opacity(0, ".root", 1), 4000);
  return clip;
};

export default template;
