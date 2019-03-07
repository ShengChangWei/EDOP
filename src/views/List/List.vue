<template>
    <div class="list">
        <div class="list-main"
        v-for="(item, index) in config"
        :key="index">
            <i :class="item.icon"></i>
            <div class="list-main-pic">
                <div class="pic-content"
                v-for="(children, childrenIndex) in item.children"
                :key="childrenIndex"
                @click="handleCurPage(children)"
                >
                    <img :src="children.imgSrc" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Config from './Config.js'
export default {
  name: 'List',
  data () {
    return {
      config: Config,
      imgSrc: require('@/assets/images/echarts/echarts.jpg')
    }
  },
  mounted: function () {
    // this.config = Config
    // console.log(this.config)
  },
  methods: {
    handleCurPage (tag) {
      this.$emit('selectedComponent', tag)
    }
  }
}
</script>

<style lang="scss" scoped>
    .list {
    //    cursor: pointer;
    //     height: 40px;
    //     width: 56px;
    //     color: #bcc9d4;
    //     margin-right: 10px;
    //     line-height: 35px;
    //     text-align: center;
    //     border-top: 2px solid transparent;

        .list-main {
        cursor: pointer;
        height: 40px;
        width: 56px;
        color: #bcc9d4;
        margin-right: 10px;
        line-height: 35px;
        text-align: center;
        border-top: 2px solid transparent;
        display: inline-block;
         &:hover {
            border-top-color: #00baff;
            color: #00baff;
            .list-main-pic {
                display: block;
            }
        }
        .list-main-pic {
            width: 420px;
            height: 220px;
            position: absolute;
            top: 40px;
            background-color: #222528;
            display: none;
            text-align: left;
            overflow: auto;
            .pic-content {
                display: inline-block;
                width: 100px;
                padding: 10px;
                margin-left: 10px;
                margin-top: 10px;
                border: 1px solid transparent;
                &:hover {
                    border: 1px solid #00baff;
                }
                img {
                     width: 100%;
                }
            }
        }
        }

    }
</style>
