<template>
  <div class="hotelpages">
    <Header />
    <HotelList :hotelList="hotelList" />
  </div>
</template>

<script>
import Header from './component/header'
import HotelList from './component/hotelList'
import {getHotels} from '../../api/api'
export default {
  data() {
    return {
      hotelList:[]
    }
  },
  components:{
    Header,
    HotelList
  },
  mounted(){
    getHotels().then(res=>{this.hotelList = res.data.hotels})
  }
}
</script>

<style>

</style>