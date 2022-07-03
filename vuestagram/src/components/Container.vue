<template>
  <div>
    <div v-if="step == 0">
      <Post :postData="a" v-for="(a, i) in postData" :key="i" />
    </div>

    <div v-if="step == 1">
      <div
        class="upload-image"
        :class="selectFilter"
        :style="{ backgroundImage: `url(${url})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="filter in filterData"
          :key="filter"
          :url="url"
          :filter="filter"
        >
          {{ filter }}
        </FilterBox>
      </div>
    </div>

    <div v-if="step == 2">
      <div
        class="upload-image"
        :class="selectFilter"
        :style="{ backgroundImage: `url(${url})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!
        </textarea>
      </div>
    </div>

    <div v-if="step == 3">
      <MyPage />
    </div>
  </div>
</template>

<script>
import Post from "./Post";
import FilterBox from "./FilterBox";
import MyPage from "./MyPage";

export default {
  name: "Container",
  components: { Post, FilterBox, MyPage },
  props: {
    postData: Array,
    filterData: Array,
    step: Number,
    url: String,
    selectFilter: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
