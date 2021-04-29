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
        url: '/api/v1/accounts/account-types/',
        columns: [
          'name', 'category', 'category_display', 'protocol', 'protocol_display', 'secret_type',
          'secret_type_display', 'is_builtin', 'comment', 'actions'
        ],
        columnsShow: {
          min: ['name', 'actions'],
          default: [
            'name', 'category_display', 'protocol_display', 'secret_type', 'secret_type_display',
            'is_builtin', 'comment', 'actions'
          ]
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
