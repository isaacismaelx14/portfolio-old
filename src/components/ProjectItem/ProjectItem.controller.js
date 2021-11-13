import showdown from "showdown";

const convert = (toConvert) => {
  const sho = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    headerLevelStart: 3,
  });

  sho.setFlavor("github");
  console.log(toConvert);
  return sho.makeHtml(toConvert);
};

export default {
  name: "project-item",
  props: ["item", "visibleItem", "index", "direction"],
  methods: {
    getItem: (item) => {
      return convert(item.description);
      // if (typeof item.description !== "string")
      //   return item.description.join("");
      // else return item.description;
    },
  },
};
