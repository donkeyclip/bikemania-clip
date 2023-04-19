import { CSSEffect } from "@donkeyclip/motorcortex";
export const rightMove = (
  value,
  selector,
  duration,
  easing = "linear",
  initialValues
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        rightMove: value,
      },
      ...(initialValues && { initialValues: { left: initialValues } }),
    },
    {
      selector,
      duration,
      easing,
    }
  );
