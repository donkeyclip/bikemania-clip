import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import scene3 from "./scenes/scene-3";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "620px",
    height: "420px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,600&display=swap`,
    },
  ],
});

clip.addIncident(scene1(0), 0);
clip.addIncident(scene2(1), 4001);
clip.addIncident(scene1(2), 8000);
clip.addIncident(scene2(3), 12001);
clip.addIncident(scene3(), 16001);
