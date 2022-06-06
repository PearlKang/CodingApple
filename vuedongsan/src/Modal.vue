<template>
  <div>
    <div class="black-bg" v-if="modalStatus == true">
      <div class="white-bg">
        <img :src="data[selectItem].image" class="room-img-madal" />
        <h4>{{ data[selectItem].title }}</h4>
        <p>{{ data[selectItem].content }}</p>
        <input v-model.number="month" type="number" />
        <p>{{ month }}개월 선택함 : {{ data[selectItem].price * month }} 원</p>
        <button @click="clickCloseModal">닫기</button>
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
  watch: {
    month(input, before) {
      // if (isNaN(input) === true) {
      //   alert("문자입력 금지");
      //   this.month = 1;
      // }

      if (input >= 13) {
        alert("13이상 입력금지");
        this.month = before;
      }
    },
  },
  props: {
    data: Array,
    selectItem: Number,
    modalStatus: Boolean,
  },
  methods: {
    clickCloseModal() {
      this.$emit("closeModal");
      this.month = 1;
    },
  },
  beforeUpdate() {
    if (this.month == 2) {
      alert("2개월은 너무 적음.. 안팝니다");
      this.month = 3;
    }
  },
};
</script>

<style></style>
