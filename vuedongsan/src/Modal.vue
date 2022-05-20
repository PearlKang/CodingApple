<template>
  <div>
    <div class="black-bg" v-if="modalStatus == true">
      <div class="white-bg">
        <img :src="data[selectItem].image" class="room-img-madal" />
        <h4>{{ data[selectItem].title }}</h4>
        <p>{{ data[selectItem].content }}</p>
        <p>{{ data[selectItem].price }} 원</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    data: Array,
    selectItem: Number,
    modalStatus: Boolean,
  },
};
</script>

<style></style>
