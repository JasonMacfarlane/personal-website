<script setup lang="ts">
import AppTopBar from './components/AppTopBar.vue'
</script>

<template>
  <AppTopBar />

  <main class="main">
    <Transition name="fade">
      <router-view />
    </Transition>
  </main>
</template>

<style scoped lang="scss">
.main {
  @apply flex flex-1;

  animation: fadeIn 1s ease 0ms 1 normal forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
