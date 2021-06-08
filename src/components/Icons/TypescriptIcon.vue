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
        <rect
          x="6"
          y="6"
          transform="scale(4.6875,4.6875)"
          width="36"
          height="36"
          fill="#1976d2"
        ></rect>
        <path
          d="M128.85938,103.125h-62.17031v15.3h22.29844v69.075h17.66719v-69.075h22.20469z"
          fill="#ffffff"
        ></path>
        <path
          d="M183.72188,122.26875c0,0 -8.37656,-5.5875 -17.84531,-5.5875c-9.46875,0 -12.87656,4.5 -12.87656,9.30938c0,12.4125 34.59844,11.17031 34.59844,36.15c0,38.47969 -52.75313,21.4125 -52.75313,21.4125v-18.45937c0,0 10.0875,7.60313 22.18594,7.60313c12.09844,0 11.63906,-7.9125 11.63906,-9c0,-11.47969 -34.28906,-11.47969 -34.28906,-36.92812c0,-34.59844 49.95937,-20.94844 49.95937,-20.94844z"
          fill="#ffffff"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "TypescriptIcon",
  props: {
    width: { type: Number, default: 100 },
  },
};
</script>
