import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutMe from "../views/About Me/AboutMe.vue";
import Projects from "../views/Projects/Projects.vue";
import Contact from "../views/Contact.vue";
// import addProject from "../views/admin/addProject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  // {
  //   path: "/admin/add-project",
  //   name: "Admin_AddProject",
  //   component: addProject,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
