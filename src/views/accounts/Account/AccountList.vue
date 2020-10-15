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
import { mapGetters } from 'vuex'
import { GenericListPage } from '@/layout/components'
import { createSourceIdCache } from '@/api/common'

export default {
  components: {
    InviteUsersDialog,
    GenericListPage,
    GenericUpdateFormDialog
  },
  data() {
    const vm = this
    return {
      tableConfig: {
        url: '/api/v1/accounts/accounts/',
        columns: [
          'name', 'username', 'address',
          'type_display', 'namespace_display',
          'actions'
        ],
      },
      headerActions: {
        hasBulkDelete: false,
      },
    }
  },
  computed: {
    ...mapGetters(['currentOrg', 'currentUser', 'device']),
    currentOrgIsDefault() {
      return this.currentOrg.id === 'DEFAULT' || this.currentOrg.id === ''
    }
  },
  mounted() {
    if (!this.currentOrgIsDefault) {
      this.headerActions.extraMoreActions[0].title = this.$t(
        'common.removeSelected'
      )
    }
  },
  methods: {
    removeUserFromOrg({ row, col, reload }) {
      const msg =
        this.$t('users.removeFromOrgWarningMsg') + ' "' + row.name + '"'
      const title = this.$t('common.Info')
      const performDelete = function() {
        const url = `/api/v1/users/users/${row.id}/`
        return this.$axios.delete(url)
      }
      this.$alert(msg, title, {
        type: 'warning',
        confirmButtonClass: 'el-button--danger',
        showCancelButton: true,
        beforeClose: async(action, instance, done) => {
          if (action !== 'confirm') return done()
          instance.confirmButtonLoading = true
          try {
            await performDelete.bind(this)({ row: row, col: col })
            done()
            reload()
            this.$message.success(this.$t('common.removeSuccessMsg'))
          } catch (error) {
            this.$message.error(this.$t('common.removeErrorMsg' + ' ' + error))
          } finally {
            instance.confirmButtonLoading = false
          }
        }
      })
    },
    bulkDeleteCallback({ selectedRows, reloadTable }) {
      let msgPrefix = this.$t('common.deleteWarningMsg')
      if (!this.currentOrgIsDefault) {
        msgPrefix = this.$t('common.removeWarningMsg')
      }
      const msg =
        msgPrefix +
        ' ' +
        selectedRows.length +
        ' ' +
        this.$t('common.rows') +
        ' ?'
      const title = this.$t('common.Info')
      const performDelete = this.performBulkDelete
      this.$alert(msg, title, {
        type: 'warning',
        confirmButtonClass: 'el-button--danger',
        showCancelButton: true,
        beforeClose: async(action, instance, done) => {
          if (action !== 'confirm') return done()
          instance.confirmButtonLoading = true
          try {
            await performDelete(selectedRows)
            done()
            reloadTable()
            let successMsg = this.$t('common.bulkDeleteSuccessMsg')
            if (!this.currentOrgIsDefault) {
              successMsg = this.$t('common.bulkRemoveSuccessMsg')
            }
            this.$message.success(successMsg)
          } catch (error) {
            let errorMsg = this.$t('common.bulkDeleteErrorMsg')
            if (!this.currentOrgIsDefault) {
              errorMsg = this.$t('common.bulkRemoveErrorMsg')
            }
            this.$message.error(errorMsg + error)
          } finally {
            instance.confirmButtonLoading = false
          }
        }
      }).catch(() => {
        /* 取消*/
      })
    },
    async performBulkDelete(selectedRows) {
      const ids = selectedRows.map(v => {
        return v.id
      })
      const data = await createSourceIdCache(ids)
      const url = `${this.tableConfig.url}?spm=` + data.spm
      return this.$axios.delete(url)
    },
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
