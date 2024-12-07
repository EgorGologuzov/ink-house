<template>
  <div class="grid-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0px, 1fr));
  grid-auto-rows: auto;
  column-gap: 30px;
  row-gap: 5px;
  max-width: 1110px;
  padding: 0 40px 0 40px;
  margin: 0 auto 0 auto;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .grid-container {
    padding: 0 40px 0 40px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .grid-container {
    padding: 0 30px 0 30px;
  }
}

@media only screen and (max-width: 576px) {
  .grid-container {
    padding: 0 15px 0 15px;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
}
</style>
