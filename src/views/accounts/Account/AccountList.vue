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
        url: '/api/v1/accounts/accounts/',
        columns: [
          'name', 'username', 'address',
          'type_display', 'namespace_display',
          'actions'
        ],
        columnsMeta: {
          actions: {
            formatterArgs: {
              hasUpdate: false,
              hasDelete: false,
              extraActions: [
                {
                  title: this.$t('accounts.Connect'),
                  name: 'connect',
                  type: 'primary',
                  has: 1,
                  can: 1,
                  callback: this.connectAccount
                }
              ]
            }
          }
        }
      },
      headerActions: {
        hasBulkDelete: false
      }
    }
  },
  computed: {
  },

  methods: {
    connectAccount() {
      alert('开始连接')
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
