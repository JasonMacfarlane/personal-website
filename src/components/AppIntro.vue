<script setup lang="ts">
import { ref } from 'vue'

const socialLinks = ref([
  {
    title: 'Email me',
    href: 'mailto:jasonmac5@gmail.com',
    target: '_self',
    icon: 'fa-solid fa-envelope',
  },
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
])
</script>

<template>
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <div class="intro__content">
          <h1>Hey, I’m&nbsp;Jason</h1>
          <h2>Full-stack engineer</h2>

          <p>
            I’m a full-stack developer specializing in front-end, passionate
            about building outstanding, inclusive user experiences. I’m currently
            a front-end engineer at
            <a
              class="link"
              href="https://springfinancial.ca"
              target="_blank"
            >Spring Financial</a> and creator of
            <a
              class="link"
              href="https://webcode.tools"
              target="_blank"
            >Web Code Tools</a>.
          </p>

          <p>
            <small>Based in Toronto, Canada.</small>
          </p>

          <div class="intro__links">
            <a
              class="intro__links-btn"
              href="/resume.pdf"
              target="_blank"
            >
              Résumé
            </a>

            <ul class="intro__social">
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
          </div>
        </div>

        <div class="intro__memoji">
          <img
            src="/img/portrait.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro {
  @apply flex flex-col items-center;

  @screen md {
    @apply flex-row;
  }

  h1 {
    @apply mb-3;
  }

  h2 {
    @apply mb-6;
  }

  p {
    @apply text-2xl;
  }
}

.intro__inner {
  @apply flex flex-col-reverse items-center justify-between mx-auto relative;

  @screen md {
    @apply flex-row-reverse;
  }
}

.intro__content {
  @apply py-10 w-full;

  @screen md {
    @apply py-20 w-3/5;
  }
}

.intro__links {
  @apply flex flex-col-reverse text-center;

  @screen md {
    @apply flex-row gap-8;
  }
}

.intro__links-btn {
  @apply duration-300 font-bold font-mono inline-block px-6 py-2 text-black text-base tracking-wider uppercase;
  @apply border-2 border-sky-500 rounded-full text-sky-500;

  &:hover {
    @apply bg-gray-900 -translate-y-1;
  }
}

.intro__social {
  @apply flex gap-8 items-center justify-center mb-8 text-2xl;

  @screen md {
    @apply mb-0;
  }

  &:hover li::after {
    @apply bg-sky-500;
  }

  a {
    @apply block duration-300;

    &:hover {
      @apply text-sky-500;
    }
  }
}

.intro__memoji {
  @apply flex-1 pointer-events-none relative;

  img {
    @apply max-w-full;
  }
}
</style>
