let config = [
  {
    icon: 'fa fa-bar-chart',
    title: '图表',
    children: [
      {
        tag: 'LineEcharts',
        imgSrc: require('@/assets/images/echarts/LineEcharts.jpg'),
        style: {
          width: '400px',
          height: '400px',
          left: '0px',
          top: '0px'
        },
        props: {

        }
      },
      {
        tag: 'PieEcharts',
        imgSrc: require('@/assets/images/echarts/PieEcharts.jpg'),
        style: {
          width: '400px',
          height: '400px',
          left: '0px',
          top: '0px'
        },
        props: {

        }
      }
    ]
  },
  {
    icon: 'fa fa-map',
    title: '图表',
    children: [
      {
        tag: 'es-map',
        imgSrc: require('@/assets/images/map/map.jpg'),
        style: {
          width: '1000px',
          height: '932px',
          left: '0px',
          top: '0px'
        },
        props: {
          geoUrl: ' http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer',
          gisApiUrl: 'http://js.arcgis.com/3.23/',
          initExtent: { xmax: 116.39029888900006, xmin: 116.04209077900009, ymax: 40.161018230000025, ymin: 39.885287565000056 },
          initExtent1: { xmax: 12980277.986602597, xmin: 12934415.769631553, ymax: 4864627.423165954, ymin: 4841696.314680432 },
          showMapType: 'tdt'
        }
      }
    ]
  },
  {
    icon: 'fa fa-table',
    title: '图表',
    children: [
      {
        tag: 'Echarts',
        imgSrc: require('@/assets/images/table/table.jpg'),
        style: {
          width: '400px',
          height: '400px',
          left: '0px',
          top: '0px'
        },
        props: {

        }
      }
    ]
  }
]

export default config
