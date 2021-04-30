<template>
  <div>
    <div>
      <!--      <ElFormRenderer> </ElFormRenderer>-->
      <el-form v-for="(item,index) in items" :ref="'propertiesForm' + index" :key="index" :model="formValue" size="mini" label-position="left" label-width="7%">
        <el-form-item v-for="(value, name) in propertyMeta" :key="name" :label="value.label">
          <el-input v-if="['string', 'slug'].indexOf(value.type) !== -1 " v-model="formValue[name]" :name="name" />
          <el-checkbox v-if="value.type === 'boolean'" :name="name" />
          <el-select v-if="value.type === 'choice'" :value="value.default" :name="name">
            <el-option v-for="opt in value.choices" :key="opt.key" :label="opt.display_name" :value="opt.value" :name="name" />
          </el-select>
          <div v-if="value.help_text" class="help-block" v-html="value.help_text" />
        </el-form-item>
        <div style="display: flex;" class="input-button">
          <el-button type="danger" icon="el-icon-minus" style="flex-shrink: 0;" size="mini" />
          <el-button type="primary" icon="el-icon-plus" style="flex-shrink: 0;" size="mini" @click="handleAdd(index)" />
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Property',
  props: {
  },
  data() {
    return {
      url: '/api/v1/accounts/account-types/',
      method: 'post',
      items: [{}],
      formValue: {},
      formsValue: [
        {
          name: '',
          type: '',
          default: ''
        }
      ],
      propertyMeta: {}
    }
  },
  computed: {
  },
  mounted() {
    this.optionUrlMetaFormColumns()
  },
  methods: {
    optionUrlMetaFormColumns() {
      this.$store.dispatch('common/getUrlMeta', { url: this.url }).then(data => {
        const remoteMeta = data.actions[this.method.toUpperCase()] || {}
        const propertiesRemoteMeta = remoteMeta.properties
        this.propertyMeta = propertiesRemoteMeta.child.children
        this.$log.debug('propertyMeta: ', this.propertyMeta)
      }).catch(err => {
        this.$log.error(err)
      }).finally(() => {
      })
    },
    handleAdd(index) {
      console.log(this.$refs['propertiesForm' + index])
    }
  }
}
</script>

<style lang="less" scoped>

</style>
