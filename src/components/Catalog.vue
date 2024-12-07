<template>
  <div class="catalog">
    <GridContainer>
      <div class="catalog__header">
        <h2 class="catalog__title">Репродукции</h2>
        <Filter />
      </div>
      <Item />
      <Item />
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from './GridContainer.vue';
import Item from './Item.vue';
import Filter from './Filter.vue';

export default {
  name: 'Catalog',
  components: {
    GridContainer,
    Item,
    Filter
  }
}
</script>

<style>

.catalog__header {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.catalog__title {
  flex: 1;
  font-size: 40px;
  margin: 0 20px 0 0;
}

.catalog .grid-container {
  row-gap: 30px;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .catalog__title {
    font-size: 30px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .catalog__title {
    font-size: 24px;
    margin: 20px 20px 20px 0;
  }
}

@media only screen and (max-width: 576px) {
  .catalog__header {
    grid-column: 1 / 3;
  }
  .catalog__title {
    font-size: 24px;
    margin: 20px 20px 20px 0;
  }
}
</style>
