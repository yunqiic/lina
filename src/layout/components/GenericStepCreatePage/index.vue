<template>
  <Page v-bind="$attrs">
    <IBox>
      <GenericStepCreateForm ref="stepCreateForm" v-bind="$attrs" v-on="$listeners" />
    </IBox>
  </Page>
</template>

<script>
import IBox from '@/components/IBox'
import Page from '@/layout/components/Page'
import GenericStepCreateForm from '../GenericStepCreateForm'
export default {
  name: 'GenericStepCreatePage',
  components: {
    IBox, Page, GenericStepCreateForm
  }
}
</script>

<style scoped>

</style>
