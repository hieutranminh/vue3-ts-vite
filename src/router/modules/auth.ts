export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/auth/AuthLogin.vue'),
    meta: {
      title: 'login',
      requiresGuest: true,
      scrollTop: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/pages/auth/AuthForgotPassword.vue'),
    meta: {
      title: 'forgot_password',
      requiresGuest: true,
      scrollTop: true,
    },
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: () => import('@/views/pages/auth/AuthResetPassword.vue'),
    props: true,
    meta: {
      title: 'reset_password',
      requiresGuest: true,
      scrollTop: true,
    },
  },
]
