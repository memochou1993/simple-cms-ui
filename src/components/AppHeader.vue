<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const links = [
  {
    title: 'Home',
    name: 'home',
  },
  {
    title: 'Customers',
    name: 'customer-list',
  },
  {
    title: 'About',
    name: 'about',
  },
];
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="/"
      >
        Simple CMS
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="offcanvasDarkNavbar"
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5
            id="offcanvasDarkNavbarLabel"
            class="offcanvas-title"
          >
            Simple CMS
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <template
              v-for="(link, i) in links"
              :key="i"
            >
              <li
                class="nav-item"
              >
                <router-link
                  class="nav-link"
                  :class="{
                    'active': link.name === route.name,
                  }"
                  :to="{
                    name: link.name,
                  }"
                >
                  {{ link.title }}
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
