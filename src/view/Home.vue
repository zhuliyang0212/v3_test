<template>
  <div class="home">HOME</div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <el-button @click="navTo">导航hello</el-button>
  <div>{{userStoreInfo.name}}</div>
  <div>{{userStoreInfo.age}}</div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { userStore } from '@/store/index'

  let userStoreInfo = userStore()
  let router = useRouter()
  let navTo = () => {
    router.push('/hello/6324')
  }
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>