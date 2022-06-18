<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${data.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ data.likes }}</p>
      <p>
        <strong>{{ data.name }}</strong> {{ data.content }}
      </p>
      <p class="date">{{ data.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  components: {},
  props: {
    data: Object,
  },
};
</script>

<style>
@import "../styles/post-style.css";
</style>
