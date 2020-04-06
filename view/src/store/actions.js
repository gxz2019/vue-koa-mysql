import { getHotels, getBanner, getList, 
  getCities,getHotCities } from '../api/api'    //接口请求
const actions = {
  getHotelDetail({ commit }) {    //酒店列表
    return getHotels().then(res => {
      commit('changeHotel', res.data.hotels)
    })
  },
  getIndexList({ commit, state }) {   //首页列表
    return getList({ page: state.pageSize }).then(res => {
      let page = state.pageSize + 1
      commit('changeIndexList', { data: res.data.strategy, page })
    })
  },
  getIndexBanner({ commit }) {   //首页轮播
    return getBanner().then(res => {
      commit('changeIndexBanner', res.data.banner)
    })
  },
  getHot({ commit }) {   //热门城市
    return getHotCities().then((res) => {
      commit('changeHotCities',res.data.hotCities)
    })
  },
  getCities({ commit }) {   //城市列表
    return getCities().then(res => {
      commit('changeCities',res.data.data.cities)
    })
  }
}

export default actions 