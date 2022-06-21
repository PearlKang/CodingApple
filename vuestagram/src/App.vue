<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :data="data" />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button>
</template>

<script>
import data from "./data/data";
import Container from "./components/Container";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      data,
      moreCnt: 0,
      step: 0,
    };
  },
  components: { Container },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
        .then((result) => {
          this.data.push(result.data);
          this.moreCnt++;
        });
    },
  },
};
</script>

<style>
@import "./styles/app-style.css";
</style>
