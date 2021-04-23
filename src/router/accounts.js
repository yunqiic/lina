import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'
export default [
  {
    path: 'accounts',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('route.AccountList'),
      licenseRequired: false
    },
    children: [
      {
        path: '',
        name: 'PAMAccountList',
        component: () => import('@/views/accounts/account/AccountList'),
        meta: { title: i18n.t('route.AccountList'), activeMenu: '/accounts/account' }
      },
      {
        path: 'create',
        name: 'PAMAccountCreate',
        component: () => import('@/views/accounts/account/AccountCreate/index'),
        meta: { title: i18n.t('route.AccountCreate'), activeMenu: '/accounts/account' },
        hidden: true
      },
      {
        path: ':id',
        name: 'PAMAccountDetail',
        component: () => import('@/views/accounts/account/AccountDetail'),
        meta: { title: i18n.t('route.AccountDetail'), activeMenu: '/accounts/account' },
        hidden: true
      },
      {
        path: ':id/update',
        name: 'PAMAccountUpdate',
        component: () => import('@/views/accounts/account/AccountCreate'),
        meta: { title: i18n.t('route.AccountUpdate'), activeMenu: '/accounts/account' },
        hidden: true
      }
    ]
  }
]
