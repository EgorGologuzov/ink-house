<template>
  <div class="filter">
    <button class="filter__item" :class="{ 'filter__item_selected': isSelected(0) }" @click="() => select(0)">Франция</button>
    <button class="filter__item" :class="{ 'filter__item_selected': isSelected(1) }" @click="() => select(1)">Германия</button>
    <button class="filter__item" :class="{ 'filter__item_selected': isSelected(2) }" @click="() => select(2)">Англия</button>
  </div>
</template>

<script>

export default {
  name: 'Filter',
  data() {
    return {
      selected: 0
    }
  },
  methods: {
    isSelected(index) {
      return this.selected === index;
    },
    select(index) {
      this.selected = index;
    }
  }
}
</script>

<style>

.filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  .filter__item:first-child {
    margin-left: 0;
  }
}

.filter__item {
  border-radius: 20px;
  background-color: #D4E8D9;
  color: #2C2D35;
  border: none;
  margin-left: 30px;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
  height: min-content;
  border: 1px solid #D4E8D9;
}

.filter__item:hover {
  background-color: #598D66;
  color: #F4F6F5;
  border: 1px solid #598D66;
}

.filter__item:focus {
  border: 1px solid #598D66;
}

.filter__item:active {
  background-color: #376B44;
  color: #F4F6F5;
  border: 1px solid #598D66;
}

.filter__item_selected {
  background-color: #376B44;
  color: #F4F6F5;
}
</style>
