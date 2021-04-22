<template>
  <AutoStepDataForm />
</template>

<script>
import AutoStepDataForm from '@/components/AutoStepDataForm'
export default {
  name: 'GenericStepCreateForm',
  components: {
    AutoStepDataForm
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
