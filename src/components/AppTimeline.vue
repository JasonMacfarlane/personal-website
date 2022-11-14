<script setup lang="ts">
import type { Timeline } from '../types/Timeline'

const timeline: Timeline = [
  {
    place: 'Spring Financial',
    title: 'Front-end Engineer',
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
      <p>Most recently built and led the Spring Financial website redesign/rebranding and the <a class="link" href="https://www.springfinancial.ca/apply/foundation" target="_blank">Foundation application flow</a> – an <em>almost</em> completely automated way for customers to apply and get approved for Spring’s credit building product.</p>

      <h3>Other tasks</h3>
      <ul class="list">
        <li>Built the customer dashboard with SMS verification</li>
        <li>Integrated and designed live chat (powered by Salesforce)</li>
        <li><mark>Coordinate deployments</mark> with DevOps engineer</li>
        <li>A/B testing</li>
        <li>Code reviews</li>
        <li>Refactored legacy code</li>
        <li><mark>Mentored</mark> junior developers</li>
      </ul>

      <h3>Technologies</h3>
      <ul>
        <li><mark>Nuxt</mark>, <mark>Vue</mark>, HTML, SCSS, <mark>Jest</mark>, Jenkins, <mark>Figma</mark></li>
      </ul>
    `,
  },
  {
    place: 'Web Code Tools',
    title: 'Creator',
    date: 'April 2014 – Present',
    links: [
      {
        href: 'https://webcode.tools',
        name: 'webcode.tools',
      },
    ],
    note: 'Website code generator for beginning web developers or anyone who needs a reminder on&nbsp;syntax.',
    content: `
      <p>Developed and designed a web code generator for beginning web developers to learn HTML, CSS and Schema.org markup to improve <mark>SEO</mark> and user experience.</p>
      <ul class="list">
        <li><a class="link" href="https://www.producthunt.com/posts/web-code-tools-2" target="_blank">#1 Product of the Day</a> on Product Hunt — May 21, 2017</li>
        <li><mark>60K+ users</mark>, <mark>185K+ page-views</mark> per month as of November 2022</li>
      </ul>

      <h3>Technologies</h3>
      <ul>
        <li>Nuxt, Vue, <mark>Node.js</mark>, HTML, SCSS, Google Analytics, GTM, Ezoic</li>
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
      <p>Worked alongside top-tier designers to build responsive, <mark>WCAG Level AA</mark> compliant, interactive websites for big companies. These websites include annual reports, sustainability reports and corporate websites.</p>
      <h3>Project specifics</h3>
      <ul class="list">
        <li>Cross-browser testing in IE11, Edge, Chrome, Firefox and Safari</li>
        <li>UI/UX planning and recommendations</li>
      </ul>

      <h3>Clients</h3>
      <ul class="list">
        <li>Newmont, New Gold, GTAA, Corby Spirits and Wine, Maple Leaf Foods, Sherritt</li>
      </ul>

      <h3>Technologies</h3>
      <ul class="list">
        <li>HTML, CSS & SCSS, <mark>JavaScript</mark>, <mark>PHP</mark>, <mark>MySQL</mark>, Adobe XD, Adobe Photoshop, Webpack</li>
      </ul>
    `,
  },
  {
    place: 'Personalized phone case e-commerce store',
    title: 'Owner & Creator',
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
      <p>Designed and developed a Shopify store selling personalized wallet phone cases. Used Angular, Angular Material and the <mark>Shopify JS SDK</mark>, <mark>Shopify Admin GraphQL API</mark> and the <mark>Shopify Storefront API</mark>. This approach allowed for maximum flexibility, like custom checkout pages and tailored landing pages based on the user’s interests from targeted ads.</p>
      <ul class="list">
        <li>Developed a product customizer with preview using Angular, <mark>TypeScript</mark> and the Node.js image processing library Sharp. This method allowed customers to upload an image of their choice and preview it on a phone case to increase conversion rate and to give the customer an accurate representation of their product.</li>
        <li>Developed <mark>custom checkout pages</mark> and integrated <mark>Stripe</mark> and <mark>PayPal</mark> due to the limitations of the regular Shopify plan not allowing checkout page modifications.</li>
        <li>Successfully tested early versions with real customers and sales using <mark>Facebook ads</mark>.</li>
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
