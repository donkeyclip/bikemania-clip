import { CSSEffect } from "@donkeyclip/motorcortex";
export const fontSize = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontSize: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
