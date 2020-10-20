<template>
  <GenericCreateUpdatePage :initial="initial" v-bind="$data" />
</template>

<script>
import { GenericCreateUpdatePage } from '@/layout/components'
export default {
  components: {
    GenericCreateUpdatePage
  },
  data() {
    return {
      fields: [
        [this.$t('common.Basic'), ['name', 'type']]
      ],
      fieldsMeta: {
      },
      url: '/api/v1/rbac/roles/'
    }
  },
  computed: {
    initial() {
      return this.$route.query
    }
  }
}
</script>

<style lang="less" scoped>

</style>
