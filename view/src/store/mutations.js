const mutatitons = {
  //改变城市
  changCity(state,city) {
    state.city = city
  },
  //改变时间
  changDate(state,date) {
    state.date = date 
  },
  transmitIndex(state,index) {
    state.letter = index
  },
  //改变登录状态
  changeLogin(state,login) {
    state.login = login
  },
  //获取hotel
  changeHotel(state,data){
    state.hotelLists = data
  },
  //获取首页list
  changeIndexList(state,data){
    state.indexLiList = [...state.indexLiList,...data.data]
    state.pageSize = data.page
  },
  //首页轮播图
  changeIndexBanner(state,data){
    state.indexBanner = data
  },
  //热门城市
  changeHotCities(state,data) {
    state.hotCities = data
  },
  //城市列表
  changeCities(state,data) {
    state.cities = data
  }
}
export default mutatitons