export default {
  name: "carousel",
  props: {
    style: { type: String, default: "" },
    setClass: { type: String, default: "" },
    useButtons: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
