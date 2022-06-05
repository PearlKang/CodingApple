<template>
  <div>
    <!-- modal -->
    <transition name="fade">
      <Modal
        v-if="modalStatus"
        @closeModal="modalStatus = false"
        :data="data"
        :selectItem="selectItem"
        :modalStatus="modalStatus"
      />
    </transition>

    <!-- top nav -->
    <div class="menu">
      <a v-for="a in menus" :key="a">{{ a }}</a>
    </div>

    <!-- banner -->
    <Discount v-if="showDiscount == true" :amount="amount" />

    <!-- sort button -->
    <button @click="priceSort">가격순정렬</button>
    <button @click="priceReverseSort">가격역순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <!-- main item lists -->
    <Card
      @openModal="
        modalStatus = true;
        selectItem = $event;
      "
      v-for="(a, i) in data"
      :key="i"
      :data="a"
    />
  </div>
</template>

<script>
import data from "./data/data";
import Discount from "./Discount";
import Modal from "./Modal";
import Card from "./Card";

export default {
  name: "App",
  data() {
    return {
      defaultData: [...data],
      data,
      menus: ["Home", "Shop", "About"],
      modalStatus: false,
      selectItem: 0,
      showDiscount: true,
      amount: 30,
    };
  },
  methods: {
    sortBack() {
      this.data = [...this.defaultData];
    },
    priceSort() {
      this.data.sort((a, b) => {
        return a.price - b.price;
      });
    },
    priceReverseSort() {
      this.data.sort((a, b) => {
        return b.price - a.price;
      });
    },
  },
  mounted() {
    setInterval(() => {
      if (this.amount === 0) {
        this.showDiscount = false;
      } else {
        this.amount--;
      }
    }, 1000);
  },
  components: { Discount, Modal, Card },
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

.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
