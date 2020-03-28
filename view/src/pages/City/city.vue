<template>
  <div class="city">
    <Header @homeRun="run" />
    <HeaderBar />
    <List :hotCities="hotCities" :cities="cities" />
    <Alphabet :cities="cities"></Alphabet>
  </div>
</template>

<script>
import Header from './component/header';
import HeaderBar from './component/HeaderBar';
import List from './component/list';
import Alphabet from './component/alphabet'
import {getHotCities,getCities} from '../../api/api'
export default {
  components:{
    Header,HeaderBar,List,
    Alphabet
  },
  data() {
    return {
      hotCities:[],
      cities:{}
    }
  },
   mounted(){
    this.gethotCities();
    this.getCity()
  },
  methods:{ 
    gethotCities() {
      getHotCities().then((res) => {
        this.hotCities = res.data.hotCities;
      })
    },
    getCity() {
      getCities().then(res =>{
        this.cities = res.data.data.cities
      })
    },
    run() {
      this.$router.push({path:'/Hotel'})
    }
  },
  
}
</script>

<style lang="less" scoped>
.city{
  height: 100%;
  // overflow: hidden;
}
</style>