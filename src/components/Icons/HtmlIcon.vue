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
          fill="#e65100"
        ></path>
        <path
          d="M112.5,37.5v149.53125l52.5,-15l11.71875,-134.53125z"
          fill="#ff6d00"
        ></path>
        <path
          d="M112.5,117.1875v-18.75h40.3125l-3.28125,53.90625l-37.03125,12.1875v-19.6875l19.21875,-6.5625l1.40625,-21.09375zM154.21875,79.6875l1.40625,-18.75h-43.125v18.75z"
          fill="#ffffff"
        ></path>
        <path
          d="M112.5,144.84375v19.6875l-37.03125,-12.1875l-1.875,-25.78125h18.75l0.9375,11.71875zM89.53125,79.6875h22.96875v-18.75h-42.65625l3.28125,56.25h39.375v-18.75h-21.5625z"
          fill="#eeeeee"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "HtmlIcon",
  props: {
    width: { type: Number, default: 100 },
  },
};
</script>
