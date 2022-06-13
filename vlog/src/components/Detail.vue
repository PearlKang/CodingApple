<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ data[$route.params.id].title }}</h5>
    <p>{{ data[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    data: Array,
  },
};
</script>

<style></style>
