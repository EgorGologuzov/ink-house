<template>
  <div class="item" v-if="product">
    <img class="item__ava" :src="product.ava"/>
    <p class="item__artist">{{ product.artist }}</p>
    <h3 class="item__title">{{ product.title }}</h3>
    <p class="item__info">{{ product.desc }}</p>
    <p class="item__price">{{ product.price.toLocaleString() }} руб</p>
    <Button text="В корзину" />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Item',
  components: {
    Button
  },
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<style>
.item p,
.item h3 {
  margin: 0;
}

.item {
  grid-column: span 4;
  padding: 20px 20px 30px 20px;
  background-color: #E1EDE6;
}

.item__ava {
  width: 100%;
  margin-bottom: 20px;
  object-fit: cover;
  aspect-ratio: 3 / 4
}

.item__title {
  margin-bottom: 10px !important;
  font-size: 30px;
  color: #2C2D35;
}

.item__artist {
  margin-bottom: 10px !important;
  font-size: 18px;
  color: #86928B;
}

.item__info {
  margin-bottom: 30px !important;
  font-size: 18px;
  color: #2C2D35;
}

.item__price {
  margin-bottom: 20px !important;
  font-size: 24px;
  color: #598D66;
}

.item .btn {
  text-wrap: nowrap;
  width: 100%;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .item {
    grid-column: span 6;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .item {
    grid-column: span 6;
  }
  .item__ava {
    margin-bottom: 15px;
  }
  .item__title {
    font-size: 24px;
  }
  .item__artist {
    margin-bottom: 10px !important;
    font-size: 18px;
  }
  .item__info {
    font-size: 18px;
  }
  .item__price {
    margin-bottom: 10px !important;
    font-size: 24px;
  }
}

@media only screen and (max-width: 576px) {
  .item {
    grid-column: span 2;
  }
}
</style>
