import { CSSEffect } from "@donkeyclip/motorcortex";
export const leftMove = (
  value,
  selector,
  duration,
  easing = "linear",
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
      ...(initialValues && { initialValues: { left: initialValues } }),
    },
    {
      selector,
      duration,
      easing,
    }
  );
