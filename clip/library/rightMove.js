import { CSSEffect } from "@donkeyclip/motorcortex";
export const rightMove = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        rightMove: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
