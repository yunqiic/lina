<template>
  <AutoStepDataForm v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import AutoStepDataForm from '@/components/AutoStepDataForm'
export default {
  name: 'GenericStepCreateForm',
  components: {
    AutoStepDataForm
  },
  props: {
  }
}
</script>

<style scoped>

</style>
