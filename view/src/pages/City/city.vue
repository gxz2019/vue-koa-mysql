<template>
  <div class="city">
    <Header @homeRun="run" />
    <List  />
    <Alphabet></Alphabet>
  </div>
</template>

<script>
import Header from './component/header';
import List from './component/list';
import Alphabet from './component/alphabet'
export default {
  components:{
    Header,List,
    Alphabet
  },
  methods:{ 
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