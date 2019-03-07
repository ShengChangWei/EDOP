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
        tag: 'Map',
        imgSrc: require('@/assets/images/map/map.jpg'),
        style: {
          width: '1920px',
          height: '932px',
          left: '0px',
          top: '0px'
        },
        props: {

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
