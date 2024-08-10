<script setup>
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
    await fetch(`http://localhost:3000/api/customers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    state.customers = state.customers.filter((customer) => customer.id !== id);
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    state.customers = data;
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
