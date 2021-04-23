<template>
  <AutoDataForm ref="form" :show-buttons="false" :url="iUrl" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import AutoDataForm from '@/components/AutoDataForm'
export default {
  name: 'GenericStepCreateForm',
  components: {
    AutoDataForm
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    iUrl() {
      return this.getUrl()
    }
  },
  methods: {
    getUrl() {
      return this.url
    }
  }
}
</script>

<style scoped>

</style>
