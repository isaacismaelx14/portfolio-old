export default {
  name: "project-item",
  props: ["item", "visibleItem", "index", "direction"],
  data: () => ({ comilla: '"' }),
  methods: {},
};
/*

// This is for conver Markdown to HTML
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
*/
