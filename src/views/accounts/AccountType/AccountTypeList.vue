<template>
  <GenericListPage :table-config="tableConfig" :header-actions="headerActions" />
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
        url: '/api/v1/accounts/account-types/',
        columns: ['name', 'category', 'protocol', 'actions'],
        columnsMeta: {
          actions: {
            formatterArgs: {
              canUpdate: function(row, cellValue) {
                return row.created_by !== 'init_db'
              },
              canDelete: function(row, cellValue) {
                return row.created_by !== 'init_db'
              }
            }
          }
        }
      },
      headerActions: {
        hasCreate: true,
        hasBulkDelete: false
      }
    }
  }
}
</script>

<style>

</style>
