<template>
  <div>
    <div class="menu">
      <a v-for="i in menus" :key="i">{{ i }}</a>
    </div>
    <div v-for="(a, i) in 3" :key="i">
      <h4>{{ products[i] }}</h4>
      <p>{{ prices[i] }} 만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      prices: [80, 70, "아무거나"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
