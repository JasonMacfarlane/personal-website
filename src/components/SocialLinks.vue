<script setup lang="ts">
const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/jasonmacfarlane',
    target: '_blank',
    icon: 'fa-brands fa-github',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jason-macfarlane/',
    target: '_blank',
    icon: 'fa-brands fa-linkedin',
  },
  {
    title: 'Product Hunt',
    href: 'https://www.producthunt.com/@jason_macfarlane',
    target: '_blank',
    icon: 'fa-brands fa-product-hunt',
  },
]
</script>

<template>
  <ul v-bind="$attrs">
    <li
      v-for="(item, index) of socialLinks"
      :key="index"
    >
      <a
        :href="item.href"
        :target="item.target"
        :title="item.title"
      >
        <font-awesome-icon
          :icon="item.icon"
          aria-hidden="true"
        />

        <span class="sr-only">
          {{ item.title }}
        </span>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
a {
  @apply block duration-300;

  &:hover {
    @apply text-sky-500;
  }
}
</style>
