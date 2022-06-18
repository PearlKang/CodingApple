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

export default {
  name: "App",
  data() {
    return {
      data,
    };
  },
  components: { Container },
};
</script>

<style>
@import "./styles/app-style.css";
</style>
