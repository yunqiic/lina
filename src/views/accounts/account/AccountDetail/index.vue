<template>
  <GenericDetailPage :object.sync="accountDetail" v-bind="config" v-on="$listeners">
    <keep-alive>
      <component :is="config.activeMenu" :object="accountDetail" />
    </keep-alive>
  </GenericDetailPage>
</template>

<script>
import { GenericDetailPage } from '@/layout/components'
import DetailCard from '@/components/DetailCard/index'
import AccountInfo from './AccountInfo'

export default {
  name: 'AccountDetail',
  components: {
    GenericDetailPage,
    DetailCard,
    AccountInfo
  },
  data() {
    return {
      accountDetail: {},
      loading: true,
      config: {
        activeMenu: 'AccountInfo',
        submenu: [
          {
            title: this.$t('accounts.AccountDetail'),
            name: 'AccountInfo'
          }
        ],
        hasRightSide: true
      }
    }
  }
}
</script>

<style scoped>

</style>
