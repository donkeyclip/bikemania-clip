import { CSSEffect } from "@donkeyclip/motorcortex";
export const scaleBig = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: 1,
        },
      },
      initialValues: {
        transform: {
          scale: 0,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
