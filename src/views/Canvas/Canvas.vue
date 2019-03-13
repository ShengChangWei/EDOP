<template>
    <div style="height:100%; width: 100%">
        <LineEchcarts  style="" options="option"></LineEchcarts>
        <PieEcharts></PieEcharts>
        <LineEchcarts></LineEchcarts>
        <PieEcharts></PieEcharts>
    </div>
</template>

<script>
export default {
  name: 'one',
  data () {
    return {
      option: {}
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
