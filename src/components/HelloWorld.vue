<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <button type="button" class="btn btn-primary">
    {{ msg }}
  </button>
</template>
