<template>
    <div class="setting">
        <el-form ref="form" label-position="left" label-width="80px">
                    <el-form-item label="宽度">
                      <el-input v-model="config.width"></el-input>
                    </el-form-item>
                    <el-form-item label="高度">
                      <el-input v-model="config.height"></el-input>
                    </el-form-item>
                     <el-form-item label="背景颜色">
                        <el-color-picker></el-color-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">提交</el-button>
                    </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Setting',
      props: {
        config: {
      type: Object,
      default: function () {
        return {
            width: '400px',
            height: '400px',
        }
      }
    }
  },
    data() {
        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>
    .setting {
        
    }
</style>


