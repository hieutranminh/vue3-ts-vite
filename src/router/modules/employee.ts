export default [
  {
    path: '/employee',
    component: () => import('@/views/layouts/TheResource.vue'),
    children: [
      {
        path: '',
        name: 'Employee',
        component: () => import('@/views/pages/employee/EmployeeIndex.vue'),
        meta: {
          breadcrumb: [{ breadcrumbName: 'breadcrumb.employee' }],
          title: 'title.employee',
          requiresAuth: true,
          scrollTop: true,
        },
      },
      {
        path: '/employee/create',
        name: 'EmployeeCreate',
        component: () => import('@/views/pages/employee/EmployeeCreate.vue'),
        meta: {
          breadcrumb: [
            { breadcrumbName: 'breadcrumb.employee', routeName: 'Employee' },
            { breadcrumbName: 'breadcrumb.employee_create' },
          ],
          title: 'title.employee',
          requiresAuth: true,
          scrollTop: true,
        },
      },
      {
        path: '/employee/edit/:id',
        name: 'EmployeeEdit',
        component: () => import('@/views/pages/employee/EmployeeEdit.vue'),
        props: true,
        meta: {
          breadcrumb: [
            { breadcrumbName: 'breadcrumb.employee', routeName: 'Employee' },
            { breadcrumbName: 'breadcrumb.employee_edit' },
          ],
          title: 'title.employee',
          requiresAuth: true,
          scrollTop: true,
        },
      },
    ],
  },
];
