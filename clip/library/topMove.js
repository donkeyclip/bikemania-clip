import { CSSEffect } from "@donkeyclip/motorcortex";
export const topMove = (
  value,
  selector,
  duration,
  easing = "linear",
  initialValues
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
      ...(initialValues && { initialValues: { left: initialValues } }),
    },
    {
      selector,
      duration,
      easing,
    }
  );
