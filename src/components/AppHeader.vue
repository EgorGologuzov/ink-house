<template>
    <div class="header__mobile-logo">
      <Logo />
    </div>
    <header class="header">
      <GridContainer>
        <div class="header__logo">
          <Logo />
        </div>
        <div class="header__mobile-nav">
          <div class="header__menu" @click="toggleMenu">
            <Icon fill>
              <Menu v-if="!isOpen" />
              <Cross v-if="isOpen" />
            </Icon>
          </div>
        <div class="header__cart"><Icon stroke href="https://google.com"><Cart /></Icon></div>
        </div>
        <div class="header__nav" :class="{ 'header__nav_open' : isOpen }">
          <ul class="header__nav-ul">
            <li class="header__nav-li header__nav-li_first"><Link href="https://google.com">Репродукции</Link></li>
            <li class="header__nav-li"><Link href="https://google.com">Новинки</Link></li>
            <li class="header__nav-li"><Link href="https://google.com">О нас</Link></li>
          </ul>
          <div class="header__cart"><Icon stroke href="https://google.com"><Cart /></Icon></div>
        </div>
      </GridContainer>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import Cart from './Cart.vue'
import GridContainer from './GridContainer.vue'
import Link from './Link.vue'
import Menu from './Menu.vue'
import Cross from './Cross.vue'
import Icon from './Icon.vue'

export default {
  name: 'AppHeader',
  components: {
    Logo,
    Cart,
    GridContainer,
    Link,
    Menu,
    Cross,
    Icon
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style>
.header {
  background-color: #E1EDE6;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.header__nav {
  grid-column: 12;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  transition: max-height 1s ease;
}

.header__nav-ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header__nav-li,
.header__cart {
  text-wrap: nowrap;
  color: #2C2D35;
  margin-left: 60px;
}

.header__nav-li_first {
  margin-left: 0;
}

.header__mobile-nav,
.header__mobile-logo  {
  display: none;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .header {
    font-size: 18px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .header {
    font-size: 18px;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    .grid-container {
      width: 100%;
    }
  }
  .header__logo {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .header__nav {
    grid-column: 1 / 13;
    grid-row: 2;
    justify-content: center;
    border-top: 1px solid #C3D1C6;
    padding-top: 15px;
    margin-top: 10px;
    > .header__cart {
      margin-left: auto;
    }
  }
}

@media only screen and (max-width: 576px) {
  .header {
    font-size: 18px;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    .grid-container {
      width: 100%;
    }
  }
  .header__logo {
    display: none;
  }
  .header__nav {
    max-height: 0;
    grid-column: 1 / 3;
    grid-row: 2;
    justify-content: start;
    overflow: hidden;
    > .header__cart {
      display: none;
    }
  }
  .header__nav_open {
    margin-top: 20px;
    max-height: 100vh;
  }
  .header__mobile-nav {
    grid-column: 1 / 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0 5px 0;
  }
  .header__menu,
  .header__cart,
  .header__nav-li {
    margin: 0;
  }
  .header__menu,
  .header__cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header__nav-ul {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  .header__nav-li {
    margin: 0 0 40px 0;
  }
  .header__mobile-logo {
    display: block;
    background-color: #fff;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>