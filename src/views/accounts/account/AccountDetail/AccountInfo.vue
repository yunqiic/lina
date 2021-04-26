<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="14">
        <DetailCard :items="detailItems" />
      </el-col>
      <el-col :span="10" />
    </el-row>
  </div>
</template>

<script>
import DetailCard from '@/components/DetailCard'
import { toSafeLocalDateStr } from '@/utils/common'

export default {
  name: 'AccountInfo',
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
    detailItems() {
      console.log(this.object)
      return [
        {
          key: this.$t('accounts.Safe'),
          value: this.object.safe_display
        },
        {
          key: this.$t('accounts.Name'),
          value: `${this.object.name}`
        },
        {
          key: this.$t('accounts.Type'),
          value: `${this.object.type_display}`
        },
        {
          key: this.$t('accounts.Username'),
          value: `${this.object.username}`
        },
        {
          key: this.$t('accounts.Address'),
          value: `${this.object.address}`
        },
        {
          key: this.$t('accounts.DateCreated'),
          value: toSafeLocalDateStr(this.object.date_created)
        },
        {
          key: this.$t('accounts.DateUpdated'),
          value: toSafeLocalDateStr(this.object.date_updated)
        },
        {
          key: this.$t('accounts.Comment'),
          value: this.object.comment
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
