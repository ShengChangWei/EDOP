<template>
    <div class="sideList"  @contextmenu.stop.prevent="handleRightClickOnCanvas($event)">
        <div class="add-nav" @click="addNav">
            <i class="fa fa-plus"></i>
        </div>
        <div

        v-for="(item, index) in canvasMap"
        :key="index"
        @click="handleCurNav(item)"
        :class="{'sideList-main': true, 'active': curNav === item}"
            >
          {{index + 1}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideList',
  data () {
    return {
      canvasMap: [],
      rightMenus: false,
      curNav: ''
    }
  },
  mounted: function () {
    //     const cur_id = new Date().getTime();
    //    this.canvasMap.push({
    //             id: cur_id,
    //             components: []
    //         })
  },
  methods: {
    handleRightClickOnCanvas ($event) {
      console.log($event)
      this.rightMenus = true
    },
    // 添加菜单
    addNav () {
      const cur_id = new Date().getTime()
      const canvasMap = {
        id: cur_id,
        components: []
      }
      this.curNav = canvasMap
      this.canvasMap.push(canvasMap)
      this.$emit('addNav', this.canvasMap)
    },
    handleCurNav (item) {
      this.curNav = item
      this.$emit('handlecurPage', this.curNav)
    }
  }

}
</script>

<style lang="scss" scoped>
    .sideList {
        height: 100%;
        width: 100%;
        .add-nav {
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
            height: 40px;
            line-height: 40px;
            color: #00baff;
            font-size: 20px;
            cursor: pointer;
        }

        .sideList-main {
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
            border: 1px solid #00baff;
            cursor: pointer;
            line-height: 50px;
            padding-left: 10px;
            color: #fff;
            box-sizing: border-box;

            &:hover,&.active {
                background-color: #00baff;
            }
        }
    }
</style>
