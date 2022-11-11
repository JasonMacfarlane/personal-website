<script setup lang="ts">
import AppTopBar from './components/AppTopBar.vue';
</script>

<template>
  <AppTopBar />

  <main class="main">
    <router-view />
  </main>
</template>

<style scoped lang="scss">
.main {
  @apply max-w-[1500px] mx-auto pb-16 pt-8;

  @screen md {
    @apply py-32;
  }
}
</style>
