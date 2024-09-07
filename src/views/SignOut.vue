<script setup>
import { auth } from '@/firebase';
import router from '@/router';

auth.signOut();

router.push({ name: 'sign-in' });
</script>

<template>
  <div />
</template>
