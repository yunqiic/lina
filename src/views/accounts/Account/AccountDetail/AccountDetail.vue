<template>
  <el-row :gutter="20">
    <el-col :md="14" :sm="24">
      <DetailCard :title="cardTitle" :items="detailItems" />
    </el-col>
  </el-row>
</template>

<script>
import DetailCard from '@/components/DetailCard'
import { toSafeLocalDateStr } from '@/utils/common'

export default {
  name: 'AccountDetail',
  components: {
    DetailCard
  },
  props: {
    object: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cardTitle() {
      return this.object.name
    },
    detailItems() {
      return [
        {
          key: this.$t('common.Name'),
          value: this.object.name
        },
        {
          key: this.$t('accounts.Type'),
          value: this.object.type_display
        },
        {
          key: this.$t('common.Username'),
          value: this.object.username
        },
        {
          key: this.$t('common.Address'),
          value: this.object.address
        },
        {
          key: this.$t('accounts.Secret'),
          value: this.object.secret
        },
        {
          key: this.$t('accounts.Secret_type'),
          value: this.object.secret_type
        },
        {
          key: this.$t('accounts.Extra_props'),
          value: JSON.stringify(this.object.extra_props)
        },
        {
          key: this.$t('accounts.Namespace'),
          value: this.object.namespace_display
        },
        {
          key: this.$t('accounts.Is_active'),
          value: this.object.is_active
        },
        {
          key: this.$t('common.dateCreated'),
          value: toSafeLocalDateStr(this.object.date_created)
        },
        {
          key: this.$t('common.createdBy'),
          value: this.object.created_by
        },
        {
          key: this.$t('common.Comment'),
          value: this.object.comment
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

