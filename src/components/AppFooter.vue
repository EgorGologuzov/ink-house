<template>
  <div class="footer">
    <GridContainer>
      <div class="footer__logo">
        <Logo />
      </div>
      <div class="footer__phone">
        <p class="footer__title">+7 (999) 543-54-54</p>
        <span class="footer__link">Мастерская</span>
      </div>
      <div class="footer__products">
        <p class="footer__title">Репродукции</p>
        <ul class="footer_ul">
          <li class="footer__link"><Link href="https://google.com">Франция</Link></li>
          <li class="footer__link"><Link href="https://google.com">Германия</Link></li>
          <li class="footer__link"><Link href="https://google.com">Англия</Link></li>
        </ul>
      </div>
      <div class="footer__new">
        <p class="footer__title">Новинки</p>
        <ul class="footer_ul">
          <li class="footer__link"><Link href="https://google.com">2024</Link></li>
          <li class="footer__link"><Link href="https://google.com">2023</Link></li>
        </ul>
      </div>
      <div class="footer__about">
        <p class="footer__title">О нас</p>
        <ul class="footer_ul">
          <li class="footer__link"><Link href="https://google.com">Художники</Link></li>
          <li class="footer__link"><Link href="https://google.com">Менеджеры</Link></li>
        </ul>
      </div>
      <div class="footer__media">
        <Medias />
        <div class="footer__copyright">Ink. House ®</div>
        <div class="footer__copyright">Все права защищены</div>
      </div>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from './GridContainer.vue'
import Logo from './Logo.vue';
import Medias from './Medias.vue';
import Link from './Link.vue';

export default {
  name: 'Footer',
  components: {
    GridContainer,
    Logo,
    Medias,
    Link,
  }
}
</script>

<style>
.footer {
  background-color: #E1EDE6;
  padding: 23px 0 23px 0;
}

.footer__logo {
  grid-column: 1 / 4;
  grid-row: 1;
}

.footer__phone {
  grid-column: 1 / 4;
  grid-row: 2;
}

.footer__products {
  grid-column: 4 / 6;
  grid-row: 1 / 3;
}

.footer__new {
  grid-column: 6 / 8;
  grid-row: 1 / 3;
}

.footer__about {
  grid-column: 8 / 10;
  grid-row: 1 / 3;
}

.footer__media {
  grid-column: 10 / 13;
  grid-row: 1 / 3;
  .medias {
    margin: 0 0 10px 0;
  }
}

.footer__title,
.footer__link {
  margin: 0 0 10px 0;
}

.footer__title {
  font-size: 20px;
  color: #2C2D35;
}

.footer_ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.footer__link {
  font-size: 18px;
  color: #86928B;
  .link {
    color: #86928B;
  }
}

.footer__copyright {
  color: #86928B;
  font-size: 12px;
  margin: 0 0 5px 0;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .footer__logo {
    grid-column: 1 / 4;
    grid-row: 1;
  }
  .footer__phone {
    grid-column: 12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-wrap: nowrap;
  }
  .footer__products {
    grid-column: 1 / 4;
    grid-row: 2;
  }
  .footer__new {
    grid-column: 4 / 7;
    grid-row: 2;
  }
  .footer__about {
    grid-column: 7 / 10;
    grid-row: 2;
  }
  .footer__media {
    grid-column: 10 / 13;
    grid-row: 2;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .footer__logo {
    grid-column: 1 / 4;
    grid-row: 1;
  }
  .footer__phone {
    grid-column: 12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-wrap: nowrap;
  }
  .footer__products {
    grid-column: 1 / 5;
    grid-row: 2;
  }
  .footer__new {
    grid-column: 5 / 9;
    grid-row: 2;
  }
  .footer__about {
    grid-column: 9 / 13;
    grid-row: 2;
  }
  .footer__media {
    grid-column: 1 / 13;
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #C3D1C6;
    padding: 16px 0 0 0;
  }
  .footer__link {
    font-size: 16px;
  }
}

@media only screen and (max-width: 576px) {
  .footer__logo {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .footer__phone {
    grid-column: 1;
    grid-row: 2;
  }
  .footer__products {
    grid-column: 2;
    grid-row: 2;
  }
  .footer__new {
    grid-column: 1;
    grid-row: 3;
  }
  .footer__about {
    grid-column: 2;
    grid-row: 3;
  }
  .footer__media {
    grid-column: 1 / 3;
    grid-row: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #C3D1C6;
    padding: 16px 0 0 0;
  }
  .footer__link {
    font-size: 16px;
  }
  .footer__title {
    font-size: 16px;
  }
}
</style>
