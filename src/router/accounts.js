import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'
// import empty from '@/layout/empty'
export default [
  {
    path: 'asset-accounts',
    component: empty,
    redirect: '',
    meta: { },
    children: [
      {
        path: '',
        component: () => import('@/views/accounts/AssetAccount/AssetAccountList'),
        name: 'AssetAccountList',
        meta: { title: i18n.t('accounts.AssetAccount'), activeMenu: '/accounts/asset-accounts' }
      },
      {
        path: 'create',
        component: () => import('@/views/accounts/AssetAccount/AssetAccountCreate'),
        name: 'AssetAccountCreate',
        meta: { title: i18n.t('accounts.CreateAssetAccount'), activeMenu: '/accounts/asset-accounts' },
        hidden: true
      }
    ]
  },
  {
    path: 'application-accounts',
    component: () => import('@/views/users/User/UserList'),
    name: 'ApplicationAccount',
    meta: { title: i18n.t('accounts.ApplicationAccount') }
  },
  {
    path: 'gathered-users',
    component: empty,
    redirect: '',
    name: 'GatherUser',
    meta: { title: i18n.t('accounts.GatherUser') },
    children: [

    ]
  },
  {
    path: 'change-auth-plan',
    component: () => import('@/views/users/User/UserList'),
    name: 'ChangeAuthPlan',
    meta: { title: i18n.t('route.ChangeAuthPlan') }
  }
]
