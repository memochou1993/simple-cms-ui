<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
import HelloWorld from '~/components/HelloWorld.vue';
</script>

<template>
  <AppHeader />
  <main class="container py-5">
    <HelloWorld msg="Hello, World!" />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
main {
  margin-top: 56px;
  margin-bottom: 40px;
}
</style>
