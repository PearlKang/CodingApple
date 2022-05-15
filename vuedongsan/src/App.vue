<template>
  <div>
    <div v-if="1 == 2">안녕1</div>
    <div v-else-if="1 == 3">안녕2</div>
    <div v-else>안녕3</div>

    <!-- modal -->
    <div class="black-bg" v-if="modalStatus">
      <div class="white-bg">
        <h4>{{ data[selectItem].title }}</h4>
        <p>{{ data[selectItem].content }}</p>
        <img :src="data[selectItem].image" class="room-img-madal" />
        <p>{{ data[selectItem].price }}</p>
        <button @click="modalStatus = false">닫기</button>
      </div>
    </div>

    <!-- top nav -->
    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>

    <!-- main item lists -->
    <div
      @click="
        modalStatus = true;
        selectItem = i;
      "
      v-for="(a, i) in data"
      :key="i"
    >
      <img :src="a.image" class="room-img" />
      <h4>{{ a.title }}</h4>
      <p>{{ a.price }} 원</p>
    </div>
  </div>
</template>

<script>
import data from "./data/data";

export default {
  name: "App",
  data() {
    return {
      data,
      menus: ["Home", "Shop", "About"],
      modalStatus: false,
      selectItem: 0,
    };
  },
  methods: {},
  components: {},
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

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

.room-img {
  width: 100%;
  margin-top: 40px;
}

.room-img-madal {
  width: 50%;
  margin-top: 40px;
}
</style>
