<template>
  <GenericListPage :table-config="tableConfig" />
</template>

<script>
import { GenericListPage } from '@/layout/components'

export default {
  components: {
    GenericListPage
  },
  data() {
    return {
      tableConfig: {
        url: '/api/v1/accounts/accounts/',
        columns: ['name', 'type_display', 'type', 'address', 'username', 'safe', 'safe_display', 'is_privileged', 'comment', 'actions'],
        columnsShow: {
          min: ['name', 'actions'],
          default: ['name', 'type_display', 'address', 'username', 'safe_display', 'is_privileged', 'actions']
        }
      },
      updateRoute: 'AccountUpdate',
      headerActions: {
        createRoute: 'AccountCreate',
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
