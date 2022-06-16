<template>
  <div>
    <Post :data="a" v-for="(a, i) in data" :key="i" />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Container",
  components: { Post },
  props: {
    data: Array,
  },
};
</script>

<style></style>
