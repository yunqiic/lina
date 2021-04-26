import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'
export default [
  {
    path: 'accounts',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('route.PAMAccountList'),
      licenseRequired: false
    },
    children: [
      {
        path: '',
        name: 'PAMAccountList',
        component: () => import('@/views/accounts/account/AccountList'),
        meta: { title: i18n.t('route.PAMAccountList'), activeMenu: '/accounts/accounts' }
      },
      {
        path: 'create',
        name: 'PAMAccountCreate',
        component: () => import('@/views/accounts/account/AccountCreate/index'),
        meta: { title: i18n.t('route.PAMAccountCreate'), activeMenu: '/accounts/accounts' },
        hidden: true
      },
      {
        path: ':id',
        name: 'PAMAccountDetail',
        component: () => import('@/views/accounts/account/AccountDetail/index'),
        meta: { title: i18n.t('route.PAMAccountDetail'), activeMenu: '/accounts/accounts' },
        hidden: true
      },
      {
        path: ':id/update',
        name: 'PAMAccountUpdate',
        component: () => import('@/views/accounts/account/AccountUpdate'),
        meta: { title: i18n.t('route.PAMAccountUpdate'), activeMenu: '/accounts/accounts' },
        hidden: true
      }
    ]
  }
]
