<template>
  <section>
    <MemoPreview v-for="memo in loadedMemos" :key="memo.id" :memo="memo" />
  </section>
</template>

<script>
import MemoPreview from "@/components/MemoPreview";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    MemoPreview,
  },
  created() {
    this.fetchMemos();
  },
  computed: {
    ...mapGetters(["loadedMemos"]),
  },
  methods: {
    ...mapActions(["fetchMemos"]),
  },
};
</script>
