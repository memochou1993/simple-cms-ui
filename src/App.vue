<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main class="container py-5">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
main {
  margin-top: 56px;
  margin-bottom: 40px;
}
</style>
