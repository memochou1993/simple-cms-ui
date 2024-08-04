<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const createCustomer = () => {
  // TODO
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-end mb-3">
    <div class="fs-2">
      Create Customer
    </div>
    <div>
      <button
        type="button"
        class="btn btn-danger btn-sm me-3"
        @click="router.push({ name: 'customer-list' })"
      >
        Cancel
      </button>
      <button
        type="button"
        class="btn btn-success btn-sm"
        @click="createCustomer"
      >
        Save
      </button>
    </div>
  </div>
  <form class="border p-3">
    <div class="mb-3">
      <label
        for="name"
        class="form-label"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        class="form-control"
      >
    </div>
  </form>
</template>
