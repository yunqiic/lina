<template>
  <GenericDetailPage :object.sync="Namespace" :active-menu.sync="config.activeMenu" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="Namespace" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage, TabPage } from '@/layout/components'
import NamespaceDetail from './NamespaceDetail'

export default {
  components: {
    GenericDetailPage,
    NamespaceDetail,
    TabPage
  },
  data() {
    return {
      Namespace: {
        name: '', date_created: '', created_by: '', comment: ''
      },
      config: {
        activeMenu: 'NamespaceDetail',
        submenu: [
          {
            title: this.$t('route.NamespaceDetail'),
            name: 'NamespaceDetail'
          }
        ],
        actions: {
          detailApiUrl: `/api/v1/namespaces/namespaces/${this.$route.params.id}/`,
          deleteApiUrl: `/api/v1/namespaces/namespaces/${this.$route.params.id}/`
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
