<template>
  <div>
    <Post :data="data[0]" />
    <Post :data="data[1]" />
    <Post :data="data[2]" />
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
