<template>
  <div>
    <img :src="data.image" class="room-img" />
    <h4>{{ data.title }}</h4>
    <p>{{ data.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Array,
    selectItem: Number,
    modalStatus: Boolean,
  },
};
</script>

<style></style>
