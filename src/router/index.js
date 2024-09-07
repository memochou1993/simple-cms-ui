import { auth } from '@/firebase';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/views/SignUp.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/views/SignIn.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/sign-out',
      name: 'sign-out',
      component: () => import('@/views/SignOut.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/customers',
      name: 'customer-list',
      component: () => import('@/views/CustomerListView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/customers/create',
      name: 'customer-create',
      component: () => import('@/views/CustomerCreateView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/customers/:id/edit',
      name: 'customer-edit',
      component: () => import('@/views/CustomerEditView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const currentUser = await auth.getCurrentUser();

  if (to.meta.requiresAuth) {
    if (!currentUser) {
      return next({ name: 'sign-in' });
    }
  }

  next();
});

export default router;
