---
layout: home
title: Inbox | Products
description: Get all app notifications in one place
hero:
  name: Inbox
  text: One-stop Inbox for app notifications
  tagline: Seamlessly consolidate and streamline communication, notifications, and alerts with our centralized, managed inbox module for all your apps.
  # image:
  #   src: /images/home/3-share.svg
  #   alt: Inbox
  actions:
    - theme: brand
      text: Book a Call
      link: https://calendar.app.google/uHEnkfwpgYSM1ppN6
    - theme: alt
      text: Learn More
      link: /docs/platform/inbox

features:
  - icon: ✉️
    title: Streamline notifications in your apps
    details: Say goodbye to the hassle of building and maintaining error-prone notification modules. Easily integrate notifications into your apps with just a single line of code,
  - icon: 🎯
    title: Customizable filters
    details: Empower users to tailor their notification preferences with advanced filtering and prioritization options.
  - icon: 🛎️
    title: Never miss out on anything
    details: Built in default notifications when new versions are available, when workflows run or fail, and more instantly, without the development work.
---

<script setup>
import BannerCta from '@theme/components/banners/BannerCta.vue'
import Footer from '@theme/components/Footer.vue'
import locale from '@theme/../../locales/en'
</script>

<section class="mt-32">
  <BannerCta v-bind="locale.home.sectionBannerCta" />

  <!-- <NewsLetter /> -->

  <Footer v-bind="locale.footer" />
</section>


