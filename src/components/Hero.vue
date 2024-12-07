<template>
  <div class="hero">
    <GridContainer>
      <img class="hero__img" src="../assets/img-1.png" />
      <div class="hero__info">
        <h1 class="hero__title">
          Реплики картин от
          <span class="hero__company">Ink. House</span>
        </h1>
        <p class="hero__desc">
          Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
        </p>
        <Button text="Продукция" />
      </div>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from './GridContainer.vue'
import Button from './Button.vue'

export default {
  name: 'Hero',
  components: {
    GridContainer,
    Button
  }
}
</script>

<style>
.hero__img {
  grid-column: 1 / 7;
  width: 100%;
}

.hero__info {
  grid-column: 7 / 13;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__title {
  font-size: 60px;
  margin: 20px 0 0 0;
}

.hero__desc {
  font-size: 18px;
  color: #86928B;
  margin-bottom: 40px;
}

.hero__company {
  color: #598D66;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .hero__title {
    font-size: 40px;
  }
  .hero__desc {
    font-size: 18px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .hero__title {
    font-size: 36px;
  }
  .hero__desc {
    font-size: 16px;
  }
}

@media only screen and (max-width: 576px) {
  .hero__title {
    font-size: 30px;
  }
  .hero__desc {
    font-size: 14px;
  }
  .hero__info {
    grid-column: 1 / 3;
  }
  .hero__img {
    display: none;
  }
}
</style>
