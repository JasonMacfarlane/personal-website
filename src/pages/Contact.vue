<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const isSending = ref(false)
const isFormSubmitted = ref(false)
const isError = ref(false)

async function onFormSubmit (e: Event) {
  e.preventDefault()

  const target = e.target as HTMLFormElement
  const data = new FormData(target)

  try {
    isSending.value = true
    await axios({
      method: target.getAttribute('method') ?? undefined,
      url: target.action,
      headers: {
        Accept: 'application/json',
      },
      data,
    })
  } catch (err) {
    isError.value = true
    console.error(err)
  }

  isSending.value = false
  isFormSubmitted.value = true
}
</script>

<template>
  <section class="section">
    <div class="container">
      <header class="header">
        <h1>Contact</h1>
      </header>

      <form
        v-if="!isFormSubmitted"
        class="contact-form"
        action="https://formspree.io/f/mlevznjn"
        method="post"
        @submit="onFormSubmit($event)"
      >
        <label for="email">Your email</label>
        <input id="email" type="email" name="email">

        <label for="subject">Subject</label>
        <input id="subject" type="text" name="subject">

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="7" />

        <button type="submit">
          {{ isSending ? 'Sending...' : 'Send' }}
        </button>
      </form>

      <p
        v-else
        class="contact-thanks"
      >
        <template v-if="!isError">
          Thanks for getting in touch! You can expect a reply from me soon.
        </template>

        <template v-else>
          There was an error submitting the form. Please
          <a
            class="link"
            href="mailto:jasonmac5@gmail.com"
          >
            email me
          </a>
          directly.
        </template>
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-form {
  @apply max-w-[600px] w-full;

  label {
    @apply block font-medium font-mono mb-2 text-sm text-sky-500 uppercase;
  }

  input,
  textarea {
    @apply bg-transparent block border-2 border-gray-600 mb-5 p-3 text-xl w-full;

    &:focus {
      @apply border-sky-500 outline-none;
    }
  }

  button {
    @apply bg-sky-500 duration-300 font-bold font-mono px-4 py-3 rounded-full text-black tracking-wider uppercase;

    &:hover {
    @apply -translate-y-1;
  }
  }
}

.contact-thanks {
  @apply text-2xl;
}
</style>
