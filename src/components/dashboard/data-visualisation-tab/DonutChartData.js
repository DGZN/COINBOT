import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['USD0', 'BTC', 'LTC'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.danger, palette.primary],
    data: [3000, 6000, 1500]
  }]
}
