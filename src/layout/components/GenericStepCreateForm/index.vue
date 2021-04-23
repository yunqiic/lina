<template>
  <AutoDataForm ref="form" :show-buttons="false" :url="url" v-bind="$attrs" v-on="$listeners" />
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
  },
  methods: {
    getFormValue() {
      return this.$refs.form.$refs.dataForm.$refs.form.getFormValue()
    }
  }
}
</script>

<style scoped>

</style>
