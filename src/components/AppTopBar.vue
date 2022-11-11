<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

function isMobile () {
  return window.innerWidth <= 768;
}

const links = ref([
  {
    title: 'About',
    to: '/',
  },
  {
    title: 'Experience',
    to: '/experience',
  },
]);

const isMenuOpen = ref(false);

function toggleMenu () {
  isMenuOpen.value = !isMenuOpen.value;
}

const route = useRoute();
watch(route, () => {
  if (isMobile()) isMenuOpen.value = false;
});

onMounted(() => {
  if (!isMobile()) isMenuOpen.value = true;
});

window.onresize = () => {
  isMenuOpen.value = !isMobile();
};
</script>

<template>
  <Suspense>
    <div class="topbar">
      <div class="topbar__inner">
        <router-link
          class="topbar__signature"
          to="/"
        >
          <img
            src="/img/signature.svg"
            alt="My signature"
          >
        </router-link>

        <nav class="topbar__nav">
          <ul class="topbar__menu" :aria-hidden="!isMenuOpen">
            <li
              v-for="(item, index) of links"
              :key="index"
            >
              <router-link :to="item.to">
                {{ item.title }}
              </router-link>
            </li>
          </ul>

          <a
            class="topbar__nav-btn"
            href="/resume.pdf"
            target="_blank"
          >
            Résumé
          </a>

          <button
            type="button"
            class="topbar__hamburger"
            title="Toggle menu"
            @click="toggleMenu"
          >
            <font-awesome-icon
              :icon="`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`"
              fixed-width
            />
          </button>
        </nav>
      </div>
    </div>
  </Suspense>
</template>

<style scoped lang="scss">
.topbar {
  @apply bg-black bg-opacity-50 left-0 px-6 py-3 sticky top-0 w-full z-50;

  backdrop-filter: blur(100px);

  @screen md {
    @apply fixed px-10 py-6;
  }
}

.topbar__inner {
  @apply flex items-center justify-between;
}

.topbar__signature {
  @apply w-36;

  @screen md {
    @apply w-56;
  }

  img {
    @apply w-full;
  }
}

.topbar__nav {
  @apply flex gap-6;

  @screen md {
    @apply gap-8;
  }
}

.topbar__menu {
  @apply bg-black duration-300 fixed flex flex-col gap-10 h-screen items-center justify-center left-0 top-0 w-full z-[-1];
  @apply opacity-0 scale-0;

  &[aria-hidden=false] {
    @apply opacity-100 scale-100;
  }

  a {
    @apply duration-300 font-bold inline-block relative text-2xl tracking-wider uppercase;

    &::after {
      @apply absolute bg-sky-500 bottom-[-2px] duration-300 left-0 h-[2px] w-0;

      content: '';
    }

    &.active::after,
    &:hover::after {
      @apply w-full;
    }

    @screen md {
      @apply text-sm;
    }
  }

  @screen md {
    @apply bg-transparent flex-row gap-8 h-auto relative w-auto z-auto;
    @apply opacity-100 scale-100;
  }
}

.topbar__nav-btn {
  @apply duration-300 font-bold inline-block px-4 py-2 text-sm tracking-wider uppercase;
  @apply border border-2 border-sky-500 text-sky-500 rounded-full;

    &:hover {
      @apply bg-gray-900 -translate-y-1;
    }
}

.topbar__hamburger {
  @screen md {
    @apply hidden;
  }
}
</style>
