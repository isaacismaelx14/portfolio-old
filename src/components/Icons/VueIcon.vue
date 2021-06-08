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
          d="M112.43906,79.6875l-24.62344,-42.1875h-73.875l98.49844,168.75l98.49844,-168.75h-73.875z"
          fill="#81c784"
        ></path>
        <path
          d="M137.0625,37.5l-24.62344,42.1875l-24.62344,-42.1875h-35.56875l60.19219,103.125l60.19219,-103.125z"
          fill="#455a64"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "VueIcon",
  props: {
    width: { type: Number, default: 100 },
  },
};
</script>
