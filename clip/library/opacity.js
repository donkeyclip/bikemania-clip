import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
