<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
  >
    {{ msg }}
  </button>
</template>
