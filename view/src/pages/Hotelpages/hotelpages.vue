<template>
  <div class="hotelpages">
    <Header />
    <HotelList :hotelList="hotelLists" />
  </div>
</template>

<script>
import Header from './component/header'
import HotelList from './component/hotelList'
import { mapActions,mapState } from 'vuex'
export default {
  data() {
    return {
      
      hotelList:[]
    }
  },
  computed:{
    ...mapState(['hotelLists']),
  },
  components:{
    Header,
    HotelList
  },
  methods:{
    ...mapActions(['getHotelDetail'])
  },
  mounted(){
    this.getHotelDetail()
  }
}
</script>

<style>

</style>