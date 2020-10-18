<template>
  <GenericDetailPage :object.sync="AccountType" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="AccountType" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage, TabPage } from '@/layout/components'
import AccountTypeDetail from './AccountTypeDetail'

export default {
  components: {
    GenericDetailPage,
    AccountTypeDetail,
    TabPage
  },
  data() {
    return {
      AccountType: {
        name: '', category: '', protocol: '', prop_fields_info: '', date_created: '', created_by: ''
      },
      config: {
        activeMenu: 'AccountTypeDetail',
        submenu: [
          {
            title: this.$t('route.AccountTypeDetail'),
            name: 'AccountTypeDetail'
          }
        ],
        actions: {
          hasUpdate: false,
          hasDelete: false,
          detailApiUrl: `/api/v1/accounts/account-types/${this.$route.params.id}/`,
          deleteApiUrl: `/api/v1/accounts/account-types/${this.$route.params.id}/`
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
