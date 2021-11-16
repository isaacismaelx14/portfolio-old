import ProjectItem from "@/components/ProjectItem/ProjectItem.vue";
import axios from "axios";
import { mapState } from "vuex";

const name = "Projects";

const created = function() {
  document.title = `${name} - Isaac Martinez`; //Temp
};

const data = () => ({
  projects: [],
});

const components = {
  ProjectItem,
};

const computed = {
  slideLen() {
    return this.projects.length - 1;
  },
  ...mapState(["server"]),
};

const mounted = async function() {
  this.isLoading = true;
  const res = await axios.get(`${this.server()}/api/projects`);
  this.projects = res.data;
  this.isLoading = false;
};

export default {
  name,
  data,
  components,
  created,
  computed,
  mounted,
};
