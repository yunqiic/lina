<template>
  <GenericListPage :table-config="tableConfig" />
</template>
<script>
import { GenericListPage } from '@/layout/components'

export default {
  name: 'SafeList',
  components: {
    GenericListPage
  },
  data() {
    return {
      tableConfig: {
        url: '/api/v1/accounts/safes/',
        columns: ['name', 'accounts_amount', 'role_binding_amount', 'comment', 'actions'],
        columnsShow: {
          min: ['name', 'actions'],
          default: ['name', 'accounts_amount', 'role_binding_amount', 'comment', 'actions']
        }
      },
      updateRoute: '',
      headerActions: {
        createRoute: 'SafeCreate',
        hasRefresh: true,
        hasExport: false,
        hasImport: false,
        hasMoreActions: false
      }
    }
  }
}
</script>

<style scoped>

</style>
