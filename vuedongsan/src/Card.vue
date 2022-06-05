<template>
  <div>
    <img :src="data.image" class="room-img" />
    <h4 @click="clickOpenModal()">{{ data.title }}</h4>
    <p>{{ data.price }} 원</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Object,
    selectItem: Number,
    modalStatus: Boolean,
  },
  methods: {
    clickOpenModal() {
      this.$emit("openModal", this.data.id);
    },
  },
};
</script>

<style></style>
