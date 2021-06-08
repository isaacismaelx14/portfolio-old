<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="40"
    height="40"
    viewBox="0 0 171 171"
    style="fill: #000000"
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
      <path d="M0,171.99654v-171.99654h171.99654v171.99654z" fill="none"></path>
      <g>
        <path
          d="M128.25,121.125l-10.6875,-8.90625l24.225,-26.71875l-24.225,-26.71875l10.6875,-8.90625l32.0625,35.625zM46.3125,121.125l-32.0625,-35.625l32.0625,-35.625l10.6875,8.90625l-24.58125,26.71875l24.58125,26.71875z"
          fill="#4447f8"
        ></path>
        <path
          d="M74.8125,138.9375l-13.5375,-4.63125l34.9125,-102.24375l13.5375,4.63125z"
          fill="#4447f8"
          :class="show ? 'show' : 'hide'"
        ></path>
        <path
          fill="#4447f8"
          :class="!show ? 'show' : 'hide'"
          d="M85.5,6.84c-43.44426,0 -78.66,35.21574 -78.66,78.66c0,43.44426 35.21574,78.66 78.66,78.66c43.44426,0 78.66,-35.21574 78.66,-78.66c0,-43.44426 -35.21574,-78.66 -78.66,-78.66zM115.83198,116.28h-7.16832v-47.01132h-0.513l-19.41192,46.58724h-6.48432l-19.41192,-46.58724h-0.513v47.01132h-7.16832v-61.56h8.91594l21.08088,50.93748h0.684l21.07404,-50.93748h8.91594z"
          style="transform: scale(0.5)"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "SourceCodeIcon",
  props: { show: { type: Boolean, default: false } },
};
</script>

<style lang="scss" scoped>
.hide {
  opacity: 0;
  transition: all 0.5s ease;
}

.show {
  opacity: 1;
  transition: all 0.5s ease;
}
</style>
