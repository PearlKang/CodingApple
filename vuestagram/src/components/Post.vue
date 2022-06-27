<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ postData.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${postData.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ postData.likes }}</p>
      <p>
        <strong>{{ postData.name }}</strong> {{ postData.content }}
      </p>
      <p class="date">{{ postData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    postData: Object,
  },
};
</script>

<style>
@import "../styles/post-style.css";
</style>
