<template>
  <div class="item">
    <img class="item__ava" src="../assets/img-2.jpg"/>
    <p class="item__artist">Марсель Руссо</p>
    <h3 class="item__title">Охота Амура</h3>
    <p class="item__info">Холст, масло (50х80)</p>
    <p class="item__price">14 500 руб</p>
    <Button text="В корзину" />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Item',
  components: {
    Button
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
