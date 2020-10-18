<template>
  <GenericDetailPage :object.sync="Account" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="Account" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage, TabPage } from '@/layout/components'
import AccountDetail from './AccountDetail'

export default {
  components: {
    GenericDetailPage,
    AccountDetail,
    TabPage
  },
  data() {
    return {
      Account: {
        name: '', type_display: '', username: '', address: '', secret: '', secret_type: '',
        namespace_display: '', extra_props: '', is_active: '', date_created: '', created_by: '',
        comment: ''
      },
      config: {
        activeMenu: 'AccountDetail',
        submenu: [
          {
            title: this.$t('route.AccountDetail'),
            name: 'AccountDetail'
          }
        ],
        actions: {
          hasUpdate: true,
          hasDelete: true
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
