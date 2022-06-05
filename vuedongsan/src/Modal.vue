<template>
  <div>
    <div class="black-bg" v-if="modalStatus == true">
      <div class="white-bg">
        <img :src="data[selectItem].image" class="room-img-madal" />
        <h4>{{ data[selectItem].title }}</h4>
        <p>{{ data[selectItem].content }}</p>
        <input @input="month = $event.target.value" />
        <p>{{ month }}개월 선택함 : {{ data[selectItem].price * month }} 원</p>
        <button @click="clickCloseModal()">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  props: {
    data: Array,
    selectItem: Number,
    modalStatus: Boolean,
  },
  methods: {
    clickCloseModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style></style>
