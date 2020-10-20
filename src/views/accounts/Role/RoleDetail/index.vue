<template>
  <GenericDetailPage :object.sync="Role" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="Role" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage, TabPage } from '@/layout/components'
import RoleDetail from './RoleDetail'

export default {
  components: {
    GenericDetailPage,
    RoleDetail,
    TabPage
  },
  data() {
    return {
      Role: {
        name: '', type: ''
      },
      config: {
        activeMenu: 'RoleDetail',
        submenu: [
          {
            title: this.$t('route.RoleDetail'),
            name: 'RoleDetail'
          }
        ],
        actions: {
          detailApiUrl: `/api/v1/rbac/roles/${this.$route.params.id}/`,
          deleteApiUrl: `/api/v1/rbac/roles/${this.$route.params.id}/`
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
