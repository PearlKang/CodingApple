<template>
  <div v-for="(a, i) in data" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ a.title }}</h5>
    <p>{{ a.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    data: Array,
  },
};
</script>

<style></style>
