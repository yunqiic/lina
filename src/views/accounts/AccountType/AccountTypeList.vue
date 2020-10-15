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
        columns: ['name', 'category', 'protocol', 'comment', 'actions'],
        columnsMeta: {

        },
        detailRoute: 'UserGroupDetail'
      },
      headerActions: {
        createRoute: 'UserGroupCreate'
      }
    }
  }
}
</script>

<style>

</style>
