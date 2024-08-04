<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const customers = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]);

const createCustomer = () => {
  router.push({ name: 'customer-create' });
};

const updateCustomer = (id) => {
  router.push({ name: 'customer-edit', params: { id } });
};

const deleteCustomer = (id) => {
  const index = customers.value.findIndex(customer => customer.id === id);
  customers.value.splice(index, 1);
};
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
        v-for="customer in customers"
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
