<template>
      <div id="app">
        <div class="edop-edit">
          <div class="edop-edit-header">
           <div class="components-menu">
             <!-- 顶部工具栏 -->
             <List v-on:selectedComponent ="selectedComponent($event)" ></List>
           </div>
            <div class="header-right">
                <i class="fa fa-send-o" title="发布"></i>
             </div>
          </div>

          <div class="edop-edit-main">
            <div class="left-edit-main">
              <!-- 左侧导航栏 -->
              <SideList v-on:addNav="addPage($event)" v-on:handlecurPage="handlecurPage($event)"></SideList>
            </div>
            <div class="center-edit-main">
              <div class="canvas-main">
                <div class="canvas-main-wrap">
                  <div class="canvas-panel">
                    <!-- 画布内容 -->
                    <div
                    class="canvas-panel-main"
                    v-for="(item , index) in canvasMap"
                    :key="index"
                    v-show="curPage === item"
                      >
                        <component
                        v-for="(childNode, childIndex) in item.components"
                        :class="{'component-node': true, active: curComponentId === childNode.id}"
                        :is="childNode.tag"
                        :key="childIndex"
                        :id="'id' + childNode.id"
                        :style="childNode.style"
                        :prop="childNode.props"
                        draggable="true"
                        @dragstart.native="handleDragStart(item,childNode, $event)"
                         @dragenter="handleDragEnter(childNode, $event)"
                        @dragover.stop.prevent="handleDragOver(childNode, $event)"
                        @click.native="clickCurComponent(item,childNode, $event)"
                       >
                      </component>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右侧配置 -->
            <div class="right-edit-main">
              <Setting :config="curCtConfig"></Setting>
              <el-button type="primary" plain @click="save">保存</el-button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './views/List/List.vue'
import SideList from './views/SideList/SideList.vue'
import Map from '@/components/Map/Map.vue'
import Echarts from '@/components/Echarts/Echarts.vue'
import LineEcharts from '@/components/LineEcharts/LineEcharts.vue'
import PieEcharts from '@/components/PieEcharts/PieEcharts.vue'
import Setting from '@/views/Setting/Setting.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    List,
    SideList,
    Map,
    Echarts,
    LineEcharts,
    PieEcharts,
    Setting
  },
  data () {
    return {
      canvasMap: [],
      curPage: '',
      curComponentId: '',
      styleConfig: {
        width: '200px',
        height: '200px'
      },
      curCtConfig: {}

//       props: {
//  geoUrl: ' http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer',
//           gisApiUrl: 'http://js.arcgis.com/3.23/',
//           initExtent: { xmax: 116.39029888900006, xmin: 116.04209077900009, ymax: 40.161018230000025, ymin: 39.885287565000056 },
//           initExtent1: { xmax: 12980277.986602597, xmin: 12934415.769631553, ymax: 4864627.423165954, ymin: 4841696.314680432 },
//           showMapType: 'tdt'
//       }
    }
  },
  methods: {
    // 添加页面
    addPage ($event) {
      this.canvasMap = $event
      this.curPage = this.canvasMap[this.canvasMap.length - 1]
    },
    handleDragStart (parentNode, node, e) {
      this.curComponentId = node.id
      let odiv = e.target // 获取目标元素
      // console.log(odiv)
      // 算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft
      let disY = e.clientY - odiv.offsetTop
      document.onmousemove = (e) => { // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let top = e.clientY - disY
        let curNode = document.querySelector('#id' + node.id)
        curNode.setAttribute('line-before', left + 'px')
        curNode.setAttribute('line-after', top + 'px')
        this.canvasMap.map((item) => {
          if (parentNode === item) {
            item.components.map((ite) => {
              if (ite.id === node.id) {
                ite.style.left = left + 'px'
                ite.style.top = top + 'px'
              }
            })
          }
        })
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    // 选择组件
    selectedComponent (event) {
      let id = new Date().getTime()
      let curInfo = {
        id: id,
        tag: event.tag,
        style: {
          left: 0,
          top: 0,
          width: event.style.width,
          height: event.style.height,
          'background-color': 'rgba(0,231,255,.11)',
          'z-index': 10
        },
        props: event.props
      }
      this.curComponentId = curInfo.id
      this.curPage.components.push(curInfo)
      this.curCtConfig = curInfo
    },
    // 点击当前导航
    handlecurPage (event) {
      console.log(event)
      this.curPage = event
    },
    // 选择当前组件
    clickCurComponent (canvas, node, event) {
      this.curComponentId = node.id
      this.styleConfig.width = node.style.width
      canvas.components.map((curComponent) => {
        curComponent.style['z-index'] = 0
      })
      node.style['z-index'] = 10
      // console.log(node)
      this.curCtConfig = node
      // console.log(curCtConfig)
    },
    save() {
     alert(JSON.stringify(this.canvasMap))
      
    }
  },
  computed: {

  }
}
</script>

<style  lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: PingFangSC, "Microsoft YaHei", "Helvetica Neue", Arial,
    sans-serif !important;
  font-size: 12px;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  min-width: 1024px;
}
#app {
  height: 100%;

  .edop-edit {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .edop-edit-header {
      display: flex;
      height: 40px;
      z-index: 100;
      background: #222528;
      .components-menu {
        left: 200px;
        margin: 0;
        padding: 0;
        display: inline-flex;
        list-style: none;
        padding-left: 0;
        position: relative;
        margin-right: 10px;

        .components-group {
          cursor: pointer;
          height: 40px;
          width: 56px;
          color: #bcc9d4;
          margin-right: 10px;
          line-height: 35px;
          text-align: center;
          border-top: 2px solid transparent;

          &:hover {
            border-top-color: #00baff;
            color: #00baff;

            .coms-drop-list {
              display: block;

            }
          }

          > i {
            font-size: 20px;
          }

          .coms-drop-list {
            display: none;
            position: absolute;
            top: 40px;
            z-index: 10;
            background: 0 0;
            box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.5);

            .list-img {
                background: url(https://img.alicdn.com/tfs/TB184VLcPfguuRjSspkXXXchpXa-14-14.png);
              }
          }
        }
      }

      .header-right {
        text-align: right;
        display: inline-block;
        font-size: 18px;
        color: #fff;
        position: absolute;
        right: 60px;
        top: 6px;
        cursor: pointer;
        &:hover {
          color: #00baff;
        }
      }
    }
    .edop-edit-main {
      flex: 1;
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      background: #1c1e22;
      .left-edit-main {
        flex: none;
        position: relative;
        width: 185px;
        height: 100%;
        background: #1d1f26;
        overflow: auto;
        display: flex;
        flex-direction: column;
        padding: 10px;

        .left-edit-tools {
          padding: 10px;
          border-bottom: 1px solid #ccc;
            i {
              color: green;
              font-size: 20px;
              cursor: pointer;
            }
            margin-bottom: 10px;
        }
        // .add-nav {
        //   width: 170px;
        //   height: 200px;
        //   border: 1px solid #00baff;
        //   margin: 0 auto;
        //   line-height: 200px;
        //   text-align: center;
        //   margin-bottom: 10px;
        //   h4 {
        //     color: #fff;
        //   }

        //   &:hover,&.active {
        //     background-color: rgb(13, 42, 67);
        //     cursor: pointer;
        //   }

        //   i{
        //       font-size: 30px;
        //       color: #00baff;
        //   }

        // }
      }
      .center-edit-main {
        flex: 1;
        background: #26282d;
        .canvas-main {
          position: relative;
          height: 100%;
          background: url(https://img.alicdn.com/tfs/TB184VLcPfguuRjSspkXXXchpXa-14-14.png)
            repeat;
          user-select: none;
          overflow: auto;

        .canvas-main-wrap {
          overflow: auto;
          // position: relative;

          .canvas-panel {
            margin-bottom: 60px;
            margin-right: 60px;
                width: 1920px;
                height: 938px;
                background-color: rgb(13, 42, 67);
                // transform: scale(0.674074) translate(0px, 0px);
                position: absolute;
                transform-origin: 0 0;
                top: 80px;
                left: 60px;
                transition: .2s all ease-in-out;
                background-size: cover,contain;
                background-position: center,right bottom;
                background-repeat: no-repeat,no-repeat;
                box-shadow: rgba(0,0,0,.5) 0 0 30px 0;
                @media (min-width: 1890px) and (max-width: 1920px) {
				               transform: scale(0.674074) translate(0px, 0px);
                }
                 @media (min-width: 1800px) and (max-width: 1890px) {
				            // transform: scale(0.624074) translate(0px, 0px);
                }
                  @media (min-width: 1750px) and (max-width: 1800px) {
				            transform: scale(0.574074) translate(0px, 0px);
                }
                   @media (min-width: 1650px) and (max-width: 1750px) {
				            transform: scale(0.474074) translate(0px, 0px);
                }
                   @media (min-width: 1550px) and (max-width: 1650px) {
				            transform: scale(0.434074) translate(0px, 0px);
                }
                    @media (min-width: 1450px) and (max-width: 1550px) {
				            transform: scale(0.404074) translate(0px, 0px);
                }
                    @media (min-width: 1366px) and (max-width: 1450px) {
				            transform: scale(0.374074) translate(0px, 0px);
                }
                    @media  (max-width: 1450px) {
				            transform: scale(0.374074) translate(0px, 0px);
                }

                .canvas-panel-main {
                  height: 100%;
                  width: 100%;
                  position: relative;
                .component-node {
                  width: 400px;
                  height: 400px;
                  position: absolute;
                  z-index: auto;
                  // overflow: auto;
                  cursor: move;
                  border: 2px solid transparent;
                  &::before,&::after {
                    color: red;
                    display: inline-block;
                    position: absolute;
                    border: 1px dashed #00baff;

                  }

                  &.active {
                    border: 2px dashed #00baff;
                    &::before {
                    content: attr(line-before);
                    padding-top: calc(200% - 20px);
                    box-sizing: border-box;
                    width: 0;
                    height: 200%;
                    left: -2px;
                    top: -200%;
                  }

                  &::after {
                     content: attr(line-after);
                    text-align: right;
                   padding-right: 5px;
                  box-sizing: border-box;
                    width: 200%;
                    height: 0px;
                    left: -200%;
                    top:-2px;
                  }
                  }
                }
                }

          }

          .main-component {
            position: absolute;
            top: 0;
            left: 0;
            width: 580px;
            height: 300px;
            padding: 20px;
            background-color: #fff;
            transform: translate(0px, 0px);
            .move-box {
              width: 100%;
              height: 100%;
              background-color: red;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 10;
              opacity: 0.2;
            }

            cursor: move;
            &:hover {

              .tools {
                display: block;
              }
            }
            .tools {
              position: absolute;
              right: -44px;
              top: 0px;
              background-color: #fff;
              // padding: 10px;
              display: none;
              cursor: pointer;
              .component-icon {
              font-size: 24px;
              color: #000;
              display: block;
              padding: 10px;

              &:hover {
                color: red;
              }

            }
            }

          }
          }
        }
      }
      .right-edit-main {
        width: 300px;
        height: 100%;
        z-index: 90;
        background: #1c1f25;
        position: relative;
        transition: width 0.25s ease-in-out;
        color: #fff;

        .el-form {
          color: #fff;
        }

        h4 {
          border-bottom: 1px solid #ccc;
          padding: 3px 0;
        }
      }
    }
  }
}
</style>
