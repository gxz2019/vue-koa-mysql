import {getHotels} from '../api/api'
const actions = {
  getHotelDetail({commit}){
    getHotels().then(res => {
      commit('changeHotel',res.data.hotels)
    })
  }
}

export default actions