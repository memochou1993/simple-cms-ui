<script setup>
import { ref } from 'vue';

const customers = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
]);

const createCustomer = () => {
  const name = prompt('Enter customer name');
  if (!name) return;
  const customer = {
    id: customers.value.length + 1,
    name,
  };
  customers.value.push(customer);
};

const updateCustomer = (id) => {
  const name = prompt('Enter customer name');
  if (!name) return;
  const customer = customers.value.find(customer => customer.id === id);
  customer.name = name;
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
    <button
      type="button"
      class="btn btn-primary btn-sm"
      @click="createCustomer"
    >
      Create
    </button>
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
