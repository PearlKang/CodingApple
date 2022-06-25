<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step >= 1" @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @write="content = $event" :data="data" :step="step" :url="url" />

  <button v-if="step === 0 && moreCnt <= 1" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label v-if="step === 0" for="file" class="input-plus">+</label>
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
      step: 0,
      url: "",
      content: "",
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
    upload(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.step++;
      this.url = url;
    },
    publish() {
      let insertData = {
        name: "Ben Kang",
        userImage: this.url,
        postImage: this.url,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: "perpetua",
      };
      this.data.unshift(insertData);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "./styles/app-style.css";
</style>
