import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/customers',
      name: 'customer-list',
      component: () => import('@/views/CustomerListView.vue'),
    },
    {
      path: '/customers/create',
      name: 'customer-create',
      component: () => import('@/views/CustomerCreateView.vue'),
    },
    {
      path: '/customers/:id/edit',
      name: 'customer-edit',
      component: () => import('@/views/CustomerEditView.vue'),
    },
  ],
});

export default router;
