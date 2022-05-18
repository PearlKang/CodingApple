<template>
  <div>
    <div class="black-bg" v-if="modalStatus">
      <div class="white-bg">
        <img :src="data[selectItem].image" class="room-img-madal" />
        <h4>{{ data[selectItem].title }}</h4>
        <p>{{ data[selectItem].content }}</p>
        <p>{{ data[selectItem].price }} 원</p>
        <button @click="modalStatus = false">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style></style>
