export default {
  styleSheet: {
    label: "Style Sheet",
    type: "object",
    props: {
      backgroundColor: { type: "color" },
      backgroundTextColor: { type: "color" },
      color: { type: "color" },
      stipe: {
        type: "object",
        props: { background: { type: "color" }, color: { type: "color" } },
      },
      hightlightColor: { type: "color" },
    },
  },
  cta: {
    label: "cta",
    type: "object",
    props: {
      title: { type: "string" },
      subtitle: { type: "string" },
    },
  },
  slides: {
    type: "array",
    items: {
      type: "object",
      props: {
        title: { type: "string" },
        subtitle: { type: "string" },
        imgUrl: { type: "string" },
        logo: { type: "string" },
      },
    },
  },
};
