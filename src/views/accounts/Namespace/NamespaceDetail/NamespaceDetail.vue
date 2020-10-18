<template>
  <el-row :gutter="20">
    <el-col :md="14" :sm="24">
      <DetailCard :title="cardTitle" :items="detailItems" />
    </el-col>
    <el-col :md="10" :sm="24">
      <RelationCard v-bind="relationConfig" />
    </el-col>
  </el-row>
</template>

<script>
import DetailCard from '@/components/DetailCard'
import { toSafeLocalDateStr } from '@/utils/common'
import RelationCard from '@/components/RelationCard'

export default {
  name: 'NamespaceDetail',
  components: {
    DetailCard,
    RelationCard
  },
  props: {
    object: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      relationConfig: {
        icon: 'fa-user',
        title: this.$t('common.Members'),
        objectsAjax: {
          url: '/api/v1/users/users/?fields_size=mini&order=name',
          transformOption: (item) => {
            return { label: item.name + '(' + item.username + ')', value: item.id }
          }
        },
        hasObjectsId: this.object.users,
        performDelete: (item) => {
          const itemId = item.value
          const objectId = this.object.id
          const relationUrl = `/api/v1/users/users-groups-relations/?usergroup=${objectId}&user=${itemId}`
          return this.$axios.delete(relationUrl)
        },
        performAdd: (items) => {
          const relationUrl = `/api/v1/users/users-groups-relations/`
          const objectId = this.object.id
          const data = items.map(v => {
            return {
              user: v.value,
              namespace: objectId
            }
          })
          return this.$axios.post(relationUrl, data)
        }
      }
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

