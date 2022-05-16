import { CSSEffect } from "@donkeyclip/motorcortex";
export const leftMove = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
