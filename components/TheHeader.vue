<template>
  <div class="header-list">
    <ul class="memo-header">
      <li class="header-items"><nuxt-link to="/memo">メモ一覧</nuxt-link></li>
      <li class="header-items">
        <nuxt-link to="/newmemo">メモ作成</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.header-list {
  height: 40px;
}
.header-items {
  color: white;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
}
</style>
