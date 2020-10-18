<template>
  <div>
    <GenericListPage
      ref="GenericListPage"
      :table-config="tableConfig"
      :header-actions="headerActions"
    />
  </div>
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
        url: '/api/v1/namespaces/namespaces/',
        columns: [
          'name', 'comment',
          'actions'
        ]
      },
      headerActions: {
        hasBulkDelete: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.asset-select-dialog ::v-deep .transition-box:first-child {
  background-color: #f3f3f3;
}
.dialog ::v-deep .el-input {
  width: 25.5vw;
}

.dialog ::v-deep .el-dialog__footer {
  padding: 0;
}
</style>
