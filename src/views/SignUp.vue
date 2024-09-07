<script setup>
import { auth } from '@/firebase';
import router from '@/router';
import { reactive } from 'vue';

const state = reactive({
  formData: {
    email: '',
    password: '',
  },
});

const submit = async () => {
  try {
    await auth.signUp(state.formData);
    router.push({ name: 'home' });
  } catch (err) {
    alert(err);
  }
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <div
      class="card"
      style="width: 20rem;"
    >
      <div class="card-header">
        <span class="fs-5">Sign Up</span>
      </div>
      <div class="card-body">
        <form
          ref="form"
          @submit.prevent="submit"
        >
          <div class="mb-3">
            <label
              for="email"
              class="form-label"
            >
              Email
            </label>
            <input
              id="email"
              v-model="state.formData.email"
              type="text"
              class="form-control"
              required
            >
          </div>
          <div class="mb-3">
            <label
              for="password"
              class="form-label"
            >
              Password
            </label>
            <input
              id="password"
              v-model="state.formData.password"
              type="password"
              class="form-control"
              required
            >
          </div>
          <div class="mb-3">
            Already have an account?
            <router-link to="/sign-in">
              Sign In
            </router-link>
          </div>
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
