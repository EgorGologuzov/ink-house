<template>
  <button :class="computeClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: "Button"
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    computeClass() {
      return this.type === "primary"
        ? 'btn btn_primary'
        : this.type === "promo" ? 'btn btn_promo' : 'btn btn_primary';
    }
  }
}
</script>

<style>
.btn {
  padding: 20px 60px 20px 60px;
  font-size: 20px;
  width: min-content;
}

.btn_primary {
  border: 1px solid #598D66;
  color: #598D66;
  background-color: transparent;
}

.btn_primary:hover {
  border: 1px solid #598D66;
  color: #F4F6F5;
  background-color: #598D66;
}

.btn_primary:focus {
  border: 1px solid #598D66;
  color: #598D66;
  background-color: #D4E8D9;
}

.btn_primary:active {
  border: 1px solid #376B44;
  color: #fff;
  background-color: #376B44;
}

.btn_promo {
  border: 1px solid #EEDB6D;
  color: #2C2D35;
  background-color: #EEDB6D;
}

.btn_promo:hover {
  border: 1px solid #FAEB97;
  color: #2C2D35;
  background-color: #FAEB97;
}

.btn_promo:focus {
  border: 1px solid #A38314;
  color: #2C2D35;
  background-color: #FAEB97;
}

.btn_promo:active {
  border: 1px solid #D9B949;
  color: #2C2D35;
  background-color: #D9B949;
}

@media only screen and (min-width: 768px) and (max-width: 1110px) {
  .btn {
    font-size: 18px;
    padding: 18px 50px 18px 50px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 768px) {
  .btn {
    font-size: 18px;
    padding: 14px 40px 14px 40px;
  }
}

@media only screen and (max-width: 576px) {
  .btn {
    font-size: 18px;
    padding: 14px 30px 14px 30px;
  }
}
</style>
