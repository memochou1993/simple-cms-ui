import { Popover } from 'bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.scss';

createApp(App)
  .use(router)
  .mount('#app');

document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover);
  });
