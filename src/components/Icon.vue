<template>
  <a
    class="icon"
    :class="{ 'icon_stroke': stroke, 'icon_fill': fill }"
    :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    href: {
      type: String,
      default: undefined
    },
    stroke: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.icon_stroke:hover path {
  stroke: #598D66 !important;
}

.icon_stroke:focus path {
  stroke: #598D66 !important;
  background-color: #D4E8D9;
}

.icon_stroke:active path {
  stroke: #376B44 !important;
}

.icon_fill:hover path {
  fill: #598D66 !important;
}

.icon_fill:focus path {
  fill: #598D66 !important;
  background-color: #D4E8D9;
}

.icon_fill:active path {
  fill: #376B44 !important;
}
</style>