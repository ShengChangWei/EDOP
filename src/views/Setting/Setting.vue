<template>
    <div class="setting-manager">
        <div class="setting-tab">
            <div
            :class="{'tab-list': true, 'active': curTab===0}"
            @click="changeTab(0)">
                <i class="fa fa-sliders"></i>
            </div>
             <div
                :class="{'tab-list': true, 'active': curTab===1}"
                @click="changeTab(1)">
                <i class="fa fa-link"></i>
            </div>
             <div
                :class="{'tab-list': true, 'active': curTab===2}"
                @click="changeTab(2)">
                <i class="fa fa-sliders"></i>
            </div>
        </div>

        <div class="setting-content" >
            <div v-show="curTab===0">
                <div class="base-info">
                    <div class="base-title">基础属性</div>
                    <div class="base-content">
                        <div class="size">
                            <el-row>
                                <el-col :span="8"><div>图表尺寸</div></el-col>
                                <el-col :span="8">
                                        <input class="base-size" type="text" v-model="config.style.width">
                                        <span>宽度</span>
                                </el-col>
                                <el-col :span="8">
                                        <input class="base-size" type="text" v-model="config.style.height">
                                        <span>高度</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="location">
                            <el-row>
                                <el-col :span="8"><div>图表位置</div></el-col>
                                <el-col :span="8">
                                        <input class="base-size" type="text"  v-model="config.style.left">
                                        <span>横坐标</span>
                                </el-col>
                                <el-col :span="8">
                                        <input class="base-size" type="text"  v-model="config.style.top">
                                        <span>纵坐标</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="location">
                            <el-row>
                                <el-col :span="8"><div>背景颜色</div></el-col>
                                <el-col :span="8">
                                    <el-color-picker v-model="config.style['background-color']" show-alpha></el-color-picker>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                 <div class="prop-info">
                    <div class="base-title">输入属性</div>
                    <div>
                        <div :key="index" v-for="(item, key, index) in config.props">
                            <span>{{key}}:</span>
                            <textarea name="" id="" cols="30" rows="10"  v-model="config.props[key]"></textarea>
                        </div>
                    </div>
                </div>
            </div>
             <div v-show="curTab===1">
                 接口数据配置
             </div>
              <div v-show="curTab===2">
                  事件配置
              </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Setting',
  props: {
    config: {
        style: {},
        props: {}
    }
  },
  data () {
    return {
      curTab: 0,
      num8: 0,
    }
  },
  methods: {
    changeTab (index) {
      this.curTab = index
    },
    getProp(key) {
        return config.props[key]
    }
  },
  computed: {
      newNum:function() {
          return this.config.props.initExtent
      }
  },
  watch: {
      newNum: {
          handler(newValue, oldValue) {
              console.log(oldValue)
            //   console.log(newValue)
              this.config.props.initExtent = JSON.stringify(newValue)
              console.dir(this.config.props.initExtent)
          }
      }
  }
}
</script>

<style lang="scss" scoped>
    .setting-manager {
        width: 100%;
        height: 100%;
        z-index: 90;
        background: #1b1f25;
        .setting-tab {
            width: 100%;
            user-select: none;
            height: 30px;
            line-height: 30px;
            font-size: 0;
            background-color: #27343e;
            .tab-list {

                display: inline-block;
                text-align: center;
                width: 33.3333%;
                color: #bcc9d4;
                border-top: 2px solid transparent;
                cursor: pointer;
                &.active {
                    background: #1c1f25;
                    border-top: 2px solid #00baff;
                    color: #00baff;
                }

                >i {
                    position: relative;
                    font-size: 18px;
                    vertical-align: top;
                }
            }
        }
        .setting-content {
            height: calc(100% - 60px);
            overflow-y: scroll;
            padding: 10px;
            .base-title {
                padding: 10px;
                background-color: #3d3e40;
            }
            .base-content {
                margin-top: 10px;
                background: #1b1f25;
                text-align: center;
                padding: 10px;
                border: 1px solid #ccc;
                .base-size {
                    width: 80px;
                }

                .location {
                    margin-top: 10px;
                }

            }

            .prop-info {
                margin-top: 10px;
            }
        }
    }
</style>
