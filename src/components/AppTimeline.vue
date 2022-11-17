<script setup lang="ts">
import type { Timeline } from '../types/Timeline'

const timeline: Timeline = [
  {
    place: 'Spring Financial',
    title: 'Front-end engineer',
    date: 'May 2021 – Present',
    location: 'Vancouver, BC (remote)',
    note: 'Subsidiary of Canada Drives Group, Spring Financial offers personal loans and credit building products to Canadians. Our goal is to offer financial products in the easiest, quickest&nbsp;way.',
    links: [
      {
        href: 'https://springfinancial.ca',
        name: 'springfinancial.ca',
      },
    ],
    content: `
      <p>Collaborate with front-end, back-end, and salesforce engineers and product owners to ship financial applications to help Canadians get personal loans or build their credit, all through automated flows.</p>

      <h3>Projects</h3>
      <ul class="list">
        <li><a class="link" href="https://www.springfinancial.ca/apply/foundation" target="_blank">Foundation application flow</a> – a flow for customers to apply and quickly get approved for Spring’s credit-building product</li>
        <li>Customer self-serve dashboard, which shows the customer’s credit score, credit history, and Spring product recommendations</li>
        <li>Develop and style live chat (powered by Salesforce) on website and application flows</li>
        <li>Website redesign/rebranding, blog, and testimonials</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li><mark>Nuxt</mark>, <mark>Vue</mark>, Jest, HTML, SCSS, Salesforce, PHP, Jenkins, <mark>Figma</mark></li>
      </ul>
    `,
  },
  {
    place: 'Web Code Tools',
    title: 'Creator & full-stack developer',
    date: 'April 2014 – Present',
    links: [
      {
        href: 'https://webcode.tools',
        name: 'webcode.tools',
      },
    ],
    note: 'Website code generator for beginning web developers or anyone who needs a reminder on&nbsp;syntax.',
    content: `
      <p>Developed and designed a web code generator for beginning web developers to learn HTML, CSS, and Schema.org markup to improve <mark>SEO</mark> and user experience.</p>
      <ul class="list">
        <li><a class="link" href="https://www.producthunt.com/posts/web-code-tools-2" target="_blank">#1 Product of the Day</a> on Product Hunt — May 21, 2017</li>
        <li><mark>60K+ users</mark>, <mark>185K+ page-views</mark> per month as of November 2022</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>Nuxt, Vue, <mark>Node.js</mark>, HTML, SCSS, Google Analytics, GTM</li>
      </ul>
    `,
  },
  {
    place: 'Works Design',
    title: 'Web Developer',
    date: 'November 2016 – May 2021',
    location: 'Toronto, ON',
    links: [
      {
        href: 'https://worksdesign.com',
        name: 'worksdesign.com',
      },
    ],
    content: `
      <p>Worked with top-tier designers to build responsive, <mark>WCAG Level AA</mark> compliant, interactive websites for large corporations. These include annual reports, sustainability reports, and corporate websites.</p>
      <ul class="list">
        <li>Cross-browser testing in IE11, Edge, Chrome, Firefox and Safari</li>
        <li>UI/UX planning and recommendations</li>
      </ul>

      <h3>Clients</h3>
      <ul class="list">
        <li>Newmont, New Gold, GTAA, Corby Spirits and Wine, Maple Leaf Foods, Sherritt</li>
      </ul>

      <h3>Skills</h3>
      <ul class="list">
        <li>HTML, CSS & SCSS, <mark>JavaScript</mark>, <mark>PHP</mark>, <mark>MySQL</mark>, Adobe XD, Adobe Photoshop</li>
      </ul>
    `,
  },
  {
    place: 'Personalized phone case e-commerce store',
    title: 'Owner & developer',
    date: 'July 2019 – April 2020',
    links: [
      {
        href: 'https://github.com/JasonMacfarlane/wallet-case-personalization-store',
        name: 'Front-end code',
        icon: 'fa-brands fa-github',
      },
      {
        href: 'https://github.com/JasonMacfarlane/wallet-case-personalization-store-api',
        name: 'Back-end code',
        icon: 'fa-brands fa-github',
      },
    ],
    note: 'Store closed due to not having enough time to run it. Code is&nbsp;open-source.',
    content: `
      <p>Designed and developed a print-on-demand Shopify store selling personalized wallet phone cases. Used Angular, Angular Material and the <mark>Shopify JS SDK</mark>, <mark>Shopify Admin GraphQL API</mark>, and the <mark>Shopify Storefront API</mark>. This approach allowed for maximum flexibility, like custom checkout pages and tailored landing pages based on the user’s interests from targeted ads.</p>
      <ul class="list">
        <li>Developed a product customizer with real-time product previews to give the customer an accurate representation of their product and increase the conversion rate</li>
        <li>Used the image processing library Sharp to optimize images that customers upload</li>
        <li>Developed custom checkout pages to allow for custom, dynamic product images during checkout (usually not possible without paying for Shopify Plus)</li>
        <li>Integrated <mark>Stripe</mark> and <mark>PayPal</mark> for checkout options</li>
        <li>Successfully tested early versions with real customers and sales using Facebook ads</li>
      </ul>

      <h3>Skills</h3>
      <ul class="list">
        <li>Angular, Shopify Admin API, Stripe API, PayPal API, HTML, SCSS, Google Analytics</li>
      </ul>
    `,
  },
  {
    place: 'Freelance web developer',
    title: 'Self-employed',
    date: 'June 2013 – March 2020',
    content: `
      <p>Worked on various small projects for clients around the world, including:</p>
      <ul class="list">
        <li>Built & optimized websites in various industries, from local gyms, to cruise boat tours in France, to web hosting companies</li>
        <li>Developed a custom Shopify store for a local doughnut delivery business</li>
        <li>Customized Shopify templates and developed plugins</li>
        <li>Built an online portal using Shopify JS and the Shopify Storefront API for a local pet store so customers can order online (Shopify JS and Shopify Storefront API)</li>
        <li>Built an API and dashboard for a startup in the caregiving space</li>
      </ul>

      <h3>Skills</h3>
      <ul class="list">
        <li>HTML, CSS, Shopify Admin API, Shopify Storefront API, Liquid, JavaScript, Node.js, Angular, Vue, Nuxt, PHP, WordPress</li>
      </ul>
    `,
  },
]
</script>

<template>
  <div class="timeline">
    <div
      v-for="item in timeline"
      :key="item.place"
      class="timeline__section"
    >
      <div class="timeline__stats">
        <div class="timeline__header">
          <h2>{{ item.place }}</h2>
          <span class="timeline__title">{{ item.title }}</span>
        </div>

        <div class="timeline__stat">
          <font-awesome-icon icon="fa-solid fa-calendar" fixed-width />
          {{ item.date }}
        </div>

        <div
          v-if="item.location"
          class="timeline__stat"
        >
          <font-awesome-icon icon="fa-solid fa-location-dot" fixed-width />
          {{ item.location }}
        </div>

        <template
          v-for="link of item.links"
          :key="link.name"
        >
          <a
            class="timeline__stat"
            :href="link.href"
            target="_blank"
          >
            <font-awesome-icon
              :icon="link.icon ? link.icon : 'fa-solid fa-link'"
              fixed-width
            />
            <span>{{ link.name }}</span>
          </a>
        </template>

        <div
          v-if="item.note"
          class="timeline__stat"
        >
          <font-awesome-icon
            icon="fa-solid fa-comment"
            fixed-width
          />
          <span v-html="item.note" />
        </div>
      </div>

      <div
        class="timeline__content"
        v-html="item.content"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  ::v-deep h3 {
    @apply mb-3;
  }
}

.timeline__section {
  @apply flex flex-col mb-20 last:mb-0;

  @screen md {
    @apply flex-row gap-x-20;
  }
}

.timeline__stats {
  @apply mb-5 text-sm w-full;

  a {
    > span {
      @apply font-bold inline-block relative;

      &::after {
        @apply absolute bottom-0 bg-sky-500 left-1/2 duration-300 h-[0.125em] -translate-x-1/2 scale-x-90 w-full;

        content: '';
      }

      &:hover::after {
        @apply scale-x-100;
      }
    }
  }

  @screen md {
    @apply mb-0 w-1/4;
  }
}

.timeline__header {
  @apply mb-5;

  & > span {
    @apply font-bold font-mono text-base uppercase;
  }

  @screen md {
    @apply mb-10;
  }
}

.timeline__stat {
  @apply flex gap-x-3 items-start mb-2 last:mb-0;

  & > svg {
    @apply mt-1;
  }
}

.timeline__content {
  @apply flex-1;
}
</style>
