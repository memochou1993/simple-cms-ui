<script setup>
import { ref } from 'vue';

/**
 * @type {import('@/models').Customer}
 */
const formData = defineModel('formData', {
  type: Object,
  default: () => ({}),
});

const form = ref();

const validateField = (e) => {
  const { target } = e;
  target.classList.toggle('is-valid', target.checkValidity());
  target.classList.toggle('is-invalid', !target.checkValidity());
};

const validateForm = () => {
  form.value.classList.add('was-validated');
  return form.value.checkValidity();
};

defineExpose({
  validateForm,
  formData,
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <form
        ref="form"
      >
        <div class="mb-3">
          <label
            for="name"
            class="form-label"
          >
            Name
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="form-control"
            required
            @input="validateField"
          >
          <div class="invalid-feedback">
            Please provide a valid name.
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
