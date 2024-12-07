<template>
  <div class="team">
    <GridContainer>
      <img class="team__img" src="../assets/our-team.png" />
      <div class="team__info">
        <h2 class="team__title">Наша команда</h2>
        <p class="team__desc">
          Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.
        </p>
        <div class="team__list">
          <img
            class="team__member"
            v-for="member in team"
            :src="member.ava"
            :title="member.name + ', ' + member.role" />
        </div>
      </div>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from './GridContainer.vue';
import { getTeam } from '../data/api.js';

export default {
  name: 'OurTeam',
  components: {
    GridContainer,
  },
  data() {
    return {
      team: []
    }
  },
  async mounted() {
    try {
      this.team = (await getTeam()).filter((_, index) => index < 3);
    } catch (error) {
      console.error('Не удалось загрузить:', error);
    }
  }
}
</script>

<style>
.team__img {
  grid-column: 1 / 5;
  width: 100%;
}

.team__info {
  grid-column: 5 / 13;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team__title {
  color: #2C2D35;
  font-size: 40px;
  margin: 30px 0 20px 0;
}

.team__desc {
  color: #2C2D35;
  font-size: 18px;
  margin: 0 0 20px 0;
}

.team__list {
  display: flex;
  flex-direction: row;
  .team__member:first-child {
    margin-left: 0;
  }
}

.team__member {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  margin-left: 30px;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .team__img {
    grid-column: 1 / 10;
  }
  .team__info {
    grid-column: 1 / 13;
    grid-row: 2;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .team__img {
    grid-column: 1 / 10;
  }
  .team__info {
    grid-column: 1 / 13;
    grid-row: 2;
  }
}

@media only screen and (max-width: 576px) {
  .team__img {
    grid-column: 1 / 3;
  }
  .team__info {
    grid-column: 1 / 3;
    grid-row: 2;
  }
  .team__list {
    justify-content: center;
    flex-wrap: wrap;
  }
  .team__member {
    margin-left: 15px;
  }
}
</style>
