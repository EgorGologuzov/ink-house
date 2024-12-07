<template>
  <div class="promo">
    <GridContainer>
      <div class="promo__info">
        <div class="promo__header">
          <Star />
          <h2 class="promo__title">
            Новая коллекция французских авторов
          </h2>
        </div>
        <p class="promo_p">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
        </p>
        <p class="promo_p">
          Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
        </p>
        <Button text="Ознакомиться" type="promo" />
      </div>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from './GridContainer.vue';
import Star from './Star.vue';
import Button from './Button.vue';

export default {
  name: 'Promo',
  components: {
    GridContainer,
    Star,
    Button
  }
}
</script>

<style>
.promo {
  width: 100%;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url('../assets/promo-bg.png');
  background-size: cover;
  .btn {
    margin: 60px 0 70px 0;
  }
}

.promo__info {
  grid-column: 1 / 7;
}

.promo__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 70px 0 0 0;
}

.promo__title {
  flex: 1;
  color: #F4F6F5;
  font-size: 40px;
  margin: 0 0 0 20px;
}

.promo_p {
  color: #fff;
  font-size: 18px;
  margin: 20px 0 0 0;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .promo__info {
    grid-column: 1 / 13;
  }
  .promo__title {
    font-size: 30px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .promo__info {
    grid-column: 1 / 13;
  }
}

@media only screen and (max-width: 576px) {
  .promo__info {
    grid-column: 1 / 3;
  }
  .promo__title {
    font-size: 24px;
  }
  .promo__p {
    font-size: 16px;
  }
  .promo .btn {
    width: 100%;
  }
}
</style>
