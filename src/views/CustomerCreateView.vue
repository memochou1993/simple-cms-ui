<script setup>
import CustomerForm from '@/components/CustomerForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref();

const createCustomer = async () => {
  if (!form.value.validateForm()) return;

  try {
    await fetch('http://localhost:3000/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value.formData),
    });
    router.push({ name: 'customer-list' });
  } catch (err) {
    console.error(err);
  }
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
  <CustomerForm ref="form" />
</template>
