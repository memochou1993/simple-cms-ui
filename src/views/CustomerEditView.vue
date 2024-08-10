<script setup>
import CustomerForm from '@/components/CustomerForm.vue';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const form = ref();

const state = reactive({
  customer: {},
});

const updateCustomer = async () => {
  if (!form.value.validateForm()) return;

  try {
    await fetch(`http://localhost:3000/api/customers/${route.params.id}`, {
      method: 'PUT',
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

(async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/customers/${route.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    state.customer = data;
  } catch (err) {
    console.error(err);
  }
})();
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
  <CustomerForm
    ref="form"
    v-model:form-data="state.customer"
  />
</template>
