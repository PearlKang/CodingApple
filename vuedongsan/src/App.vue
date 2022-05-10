<template>
  <div>
    <!-- modal -->
    <div class="black-bg" v-if="modalStatus">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
        <button @click="modalStatus = false">닫기</button>
      </div>
    </div>

    <!-- top nav -->
    <div class="menu">
      <a v-for="i in menus" :key="i">{{ i }}</a>
    </div>

    <!-- main lists -->
    <div v-for="(a, i) in 3" :key="i">
      <img :src="roomImgUrl(i)" class="room-img" />
      <h4 @click="modalStatus = true">{{ products[i] }}</h4>
      <p>{{ prices[i] }} 만원</p>
      <button @click="reports[i]++">허위매물신고</button>
      <span>신고수 : {{ reports[i] }}</span>
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
      reports: [0, 0, 0],
      modalStatus: false,
    };
  },
  methods: {
    increase() {
      this.reports++;
    },
    roomImgUrl(input) {
      return require("./assets/room" + input + ".jpg");
    },
  },
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
</style>
