<template>
    <div class="map">
        <EVueEsrimap
		:mapType="'tdt'"
		:mapUrl="['vec','cva']"
		:submapUrl="[['img','cia'], ['ter','cta']]"
		:geoUrl="geoUrl"
		:initExtent="initExtent"
		:gisApiUrl="gisApiUrl"
		></EVueEsrimap>
    </div>
</template>

<script>
import esriLoader from 'esri-loader'
export default {
  name: 'Map',
  data() {
      return {
          initExtent: {xmax: 116.39029888900006, xmin: 116.04209077900009, ymax: 40.161018230000025, ymin: 39.885287565000056},
          gisApiUrl: 'https://js.arcgis.com/3.23/',
          geoUrl: 'https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'
      }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
    .map {
        width: 100%;
        height: 100%;
        // color: red;
        // width: 200px;
        // height: 200px;
    }

</style>
