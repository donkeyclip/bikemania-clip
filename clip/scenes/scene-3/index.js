import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { topMove, leftMove, scaleBig, opacity } from "../../library/index.js";

const template = () => {
  const clip = new HTMLClip({
    html,
    css,
    selector: `.cta`,
    containerParams: {
      width: "620px",
      height: "420px",
    },
    initParams: {
      styleSheet: "@initParams.styleSheet",
      info: `@initParams.cta`,
    },
  });

  clip.addIncident(opacity(1, ".root", 1), 0);
  clip.addIncident(leftMove("0%", ".hightlight", 1500, "easeInOutQuint"), 0);
  clip.addIncident(leftMove("18%", ".image", 1500, "easeInOutQuint"), 0);
  clip.addIncident(
    leftMove("0%", ".subtitle,.title", 1500, "easeInOutQuint"),
    1500
  );
  clip.addIncident(opacity(0, ".root", 1), 4000);
  return clip;
};

export default template;
