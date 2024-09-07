<script setup>
import { auth } from '@/firebase';
import { reactive } from 'vue';

const state = reactive({
  user: null,
});

auth.onAuthStateChanged((user) => {
  state.user = user;
});
</script>

<template>
  <template v-if="state.user">
    <div>
      Hi, {{ state.user.email }}
    </div>
  </template>
</template>
