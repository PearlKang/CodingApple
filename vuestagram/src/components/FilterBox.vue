<template>
  <div
    class="filter-item"
    :class="filter"
    :style="{ backgroundImage: `url(${url})` }"
    @click="clickSelectFilter"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    url: String,
    filter: String,
  },
  methods: {
    clickSelectFilter() {
      this.emitter.emit("clickFilter", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
