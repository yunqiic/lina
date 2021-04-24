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
    form() {
      return this.$refs.form.$refs.dataForm.$refs.form
    }
  },
  methods: {
    getFormValue() {
      return this.form.getFormValue()
    },
    validate() {
      return this.form.validate()
    }
  }
}
</script>

<style scoped>

</style>
