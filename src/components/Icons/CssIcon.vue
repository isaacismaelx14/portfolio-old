<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    :width="width"
    :height="width"
    viewBox="0 0 225 225"
    style=" fill:#000000;"
  >
    <g
      fill="none"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
      style="mix-blend-mode: normal"
    >
      <path d="M0,225.98959v-225.98959h225.98959v225.98959z" fill="none"></path>
      <g>
        <path
          d="M192.1875,23.4375h-159.375l14.0625,159.375l65.625,18.75l65.625,-18.75l14.0625,-159.375z"
          fill="#0277bd"
        ></path>
        <path
          d="M112.5,37.5v149.53125l52.5,-15l11.71875,-134.53125z"
          fill="#039be5"
        ></path>
        <path
          d="M155.15625,60.9375h-42.65625v18.75h22.96875l-1.40625,18.75h-21.5625v18.75h20.625l-1.40625,21.09375l-19.21875,6.5625v19.6875l37.03125,-12.1875l3.28125,-53.90625v0z"
          fill="#ffffff"
        ></path>
        <path
          d="M112.5,60.9375v18.75h-41.71875l-1.40625,-18.75zM90.9375,98.4375l0.9375,18.75h20.625v-18.75zM92.8125,126.5625h-18.75l1.40625,25.78125l37.03125,12.1875v-19.6875l-19.21875,-6.5625z"
          fill="#eeeeee"
        ></path>
      </g>
    </g></svg
></template>

<script lang="ts">
export default {
  name: "CssIcon",
  props: {
    width: { type: Number, default: 100 },
  },
};
</script>
