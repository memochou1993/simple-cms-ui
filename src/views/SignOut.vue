<script setup>
import { auth } from '@/firebase';
import router from '@/router';

(async () => {
  await auth.signOut();
  router.push({ name: 'sign-in' });
})();
</script>

<template>
  <div />
</template>
