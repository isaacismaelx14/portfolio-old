import NodeJsIcon from "@/components/Icons/NodeJsIcon.vue";
import HtmlIcon from "@/components/Icons/HtmlIcon.vue";
import JavascriptIcon from "@/components/Icons/JavascriptIcon.vue";
import CssIcon from "@/components/Icons/CssIcon.vue";
import TypescriptIcon from "@/components/Icons/TypescriptIcon.vue";
import ReactIcon from "@/components/Icons/ReactIcon.vue";
import VueIcon from "@/components/Icons/VueIcon.vue";
import PythonIcon from "@/components/Icons/PythonIcon.vue";
import ExpressIcon from "@/components/Icons/ExpressIcon.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    name: "AboutMe",
    created: function() {
      document.title = "About Me - Isaac Martinez"; //Temp
    },
    components: {
      NodeJsIcon,
      HtmlIcon,
      JavascriptIcon,
      CssIcon,
      TypescriptIcon,
      ReactIcon,
      VueIcon,
      PythonIcon,
      ExpressIcon,
    },
    mounted: () => {
      gsap.registerPlugin(ScrollTrigger);
  
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
      });
  
      gsap.from("h2", {
        scrollTrigger: "section",
        x: 60,
        opacity: 0,
      });
  
      gsap.from("p", {
        opacity: 0,
        x: -60,
      });
    },
  };