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
<!-- https://codingapple1.github.io/vue/more0.json -->
<!-- https://codingapple1.github.io/vue/more1.json -->
