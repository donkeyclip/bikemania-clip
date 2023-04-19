import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { topMove, leftMove, opacity } from "../../library/index.js";

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
  clip.addIncident(leftMove("0%", ".bg", 3500), 0);
  clip.addIncident(
    leftMove("0%", ".hightlight", 1500, "easeInOutQuint", "-100%"),
    0
  );
  clip.addIncident(
    leftMove("50%", ".image", 1500, "easeInOutQuint", "-100%"),
    500
  );
  clip.addIncident(
    topMove("90%", ".logo", 1000, [0.86, 0, 0.07, 1], "-150%"),
    700
  );
  clip.addIncident(
    leftMove("78%", ".subtitle", 1500, "easeInOutQuint", "100%"),
    0
  );
  clip.addIncident(
    topMove("68%", ".subtitle", 1500, "easeInOutQuint", "100%"),
    0
  );
  clip.addIncident(opacity(0, ".root", 1), 4000);
  return clip;
};

export default template;
