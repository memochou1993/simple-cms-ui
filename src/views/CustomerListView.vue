<script setup>
import { customer } from '@/api';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({
  customers: [],
});

const createCustomer = () => {
  router.push({ name: 'customer-create' });
};

const updateCustomer = (id) => {
  router.push({ name: 'customer-edit', params: { id } });
};

const deleteCustomer = async (id) => {
  try {
    await customer.destroy(id);
    state.customers = state.customers.filter((customer) => customer.id !== id);
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  try {
    state.customers = await customer.list();
  } catch (err) {
    console.error(err);
  }
})();
</script>

<template>
  <div class="d-flex justify-content-between align-items-end mb-3">
    <div class="fs-2">
      Customers
    </div>
    <div>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="createCustomer"
      >
        Create
      </button>
    </div>
  </div>
  <table class="table table-striped table-bordered align-middle">
    <thead>
      <tr>
        <th>
          ID
        </th>
        <th>
          Name
        </th>
        <th>
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="customer in state.customers"
        :key="customer.id"
      >
        <td>
          {{ customer.id }}
        </td>
        <td>
          {{ customer.name }}
        </td>
        <td>
          <button
            type="button"
            class="btn btn-warning btn-sm me-3"
            @click="updateCustomer(customer.id)"
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            @click="deleteCustomer(customer.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
