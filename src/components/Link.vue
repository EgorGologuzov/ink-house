<template>
  <a class="link" :href="href">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style>
.link {
  color: #2C2D35;
  text-decoration: none;
}

.link:hover {
  color: #598D66 !important;
}

.link:focus {
  color: #2C2D35 !important;
  background-color: #D4E8D9;
}

.link:active {
  color: #376B44 !important;
}
</style>