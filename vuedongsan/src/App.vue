<template>
  <div>
    <!-- modal -->
    <Modal :data="data" :selectItem="selectItem" :modalStatus="modalStatus" />

    <!-- top nav -->
    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>

    <!-- banner -->
    <Discount />

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
import Discount from "./Discount";
import Modal from "./Modal";

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
  components: { Discount, Modal },
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
