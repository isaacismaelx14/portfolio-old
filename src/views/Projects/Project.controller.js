import Carousel from "@/components/Carousel/Carousel.vue";
import ProjectItem from "@/components/ProjectItem/ProjectItem.vue";
import axios from "axios";

const name = "Projects";

const created = function() {
  document.title = `${name} - Isaac Martinez`; //Temp
};

const data = () => ({
  projects: [],
  actualSlide: 0,
  direction: "left",
  description: null,
});

const components = {
  Carousel,
  ProjectItem,
};

const computed = {
  slideLen() {
    return this.projects.length - 1;
  },
};

const methods = {
  next() {
    const limit = this.slideLen;
    if (this.actualSlide < limit) this.actualSlide++;
    else this.actualSlide = 0;
    this.direction = "left";
  },
  prev() {
    if (this.actualSlide !== 0) this.actualSlide--;
    else this.actualSlide = this.slideLen;
    this.direction = "right";
  },
};

export default {
  name,
  data,
  components,
  created,
  methods,
  computed,
  mounted: async function() {
    const res = await axios.get("/api/projects");
    this.projects = res.data;
  },
};
