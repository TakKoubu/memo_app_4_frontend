<template>
  <div class="text-form">
    <textarea class="memo-text" v-model="content"></textarea>
    <button class="memo-btn" @click="addMemo">作成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    addMemo() {
      this.$store.dispatch("addMemo", this.content).then(() => {
        this.$router.push("/memo");
      });
    },
  },
};
</script>

<style scoped>
.text-form {
  margin-left: 45px;
}
.memo.text {
  display: block;
  margin-left: 10px;
}
.memo-btn {
  display: block;
}
</style>
