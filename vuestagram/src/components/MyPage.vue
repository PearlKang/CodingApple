<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { computed, onMounted, reactive, ref, toRefs, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "MyPage",
  setup(props, context) {
    let follower = ref([]);
    let test = reactive({ name: "kang" });

    test;
    let propss = ref(props);

    let { one } = toRefs(props);
    console.log(one.value);

    watch(one, () => {
      console.log(one);
    });

    let result = computed(() => {
      return follower.value.length;
    });
    console.log(result.value);

    let store = useStore();
    console.log(store.state.name);
    console.log(store.commit());

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },
  data() {
    return {};
  },
  props: {
    one: Number,
  },
};
</script>

<style scoped></style>
