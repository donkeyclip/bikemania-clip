import { CSSEffect } from "@donkeyclip/motorcortex";
export const topMove = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
