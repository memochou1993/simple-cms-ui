<script setup>
import CustomerForm from '@/components/CustomerForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref();

const updateCustomer = () => {
  // TODO
  console.log(form.value.validateForm());
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-end mb-3">
    <div class="fs-2">
      Edit Customer
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
        @click="updateCustomer"
      >
        Save
      </button>
    </div>
  </div>
  <CustomerForm ref="form" />
</template>
