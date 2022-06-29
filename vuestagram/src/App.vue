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

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.state.name = '이렇게 수정하지마.'">버튼</button>

  <Container
    @write="content = $event"
    :postData="postData"
    :filterData="filterData"
    :step="step"
    :url="url"
    :selectFilter="selectFilter"
  />

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
import postData from "./data/postData";
import filterData from "./data/filterData";
import Container from "./components/Container";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postData,
      filterData,
      moreCnt: 0,
      step: 0,
      url: "",
      content: "",
      selectFilter: "",
    };
  },
  components: { Container },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
        .then((result) => {
          this.postData.push(result.data);
          this.moreCnt++;
        });
    },
    upload(e) {
      const file = e.target.files;
      const url = URL.createObjectURL(file[0]);

      this.step++;
      this.url = url;
    },
    publish() {
      const insertData = {
        name: "Ben Kang",
        userImage: this.url,
        postImage: this.url,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.selectFilter,
      };
      this.postData.unshift(insertData);
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on("clickFilter", (data) => {
      this.selectFilter = data;
    });
  },
};
</script>

<style>
@import "./styles/app-style.css";
</style>
