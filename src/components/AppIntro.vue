<script setup lang="ts">
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <div class="intro">
    <div class="intro__bg" />
    <div class="container">
      <div class="intro__content">
        <h1>Hey, I’m&nbsp;Jason</h1>
        <h2>Full-Stack engineer</h2>

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
          >Web Code Tools</a>. When I’m not working, I like to play piano
          and will occasionally upload a cover to&nbsp;<a
            class="link"
            href="https://www.youtube.com/channel/UC17vXvjwdOFymoNEh69sDww"
            target="_blank"
          >YouTube</a>.
        </p>

        <span class="intro__base">Based in Toronto, Canada.</span>

        <div class="intro__links">
          <a
            class="intro__links-btn"
            href="/Resume%20%E2%80%93%C2%A0Jason%20Macfarlane.pdf"
            target="_blank"
          >
            Résumé
          </a>

          <SocialLinks class="intro__social" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro {
  @apply flex flex-col flex-1 items-start justify-start relative;

  @screen md {
    @apply flex-row items-center justify-end;
  }

  h1 {
    @apply mb-3;
  }

  h2 {
    @apply mb-6;
  }

  p {
    @apply leading-9 text-2xl;
  }
}

.intro__bg {
  @apply bg-cover bg-right-top bg-no-repeat h-60 left-0 mt-[-66px] relative w-screen;

  background-image: url('/img/portrait.jpg');

  &::after {
    @apply absolute bg-black bg-opacity-60 h-full left-0 top-[0] w-full;

    backdrop-filter: grayscale(100%);
    content: '';
  }

  @screen md {
    @apply absolute mt-0 top-[-88px];

    height: calc(100% + 88px);
  }
}

.intro__content {
  @apply py-10 z-40;

  text-shadow: 0 0 30px rgba(0,0,0,0.6);

  @screen md {
    @apply ml-auto py-20 max-w-[700px] relative w-full;
  }
}

.intro__base {
  @apply block font-mono mb-8;
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
}
</style>
