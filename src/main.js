import { Popover } from 'bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import './style.scss';

createApp(App).mount('#app');

document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover);
  });
