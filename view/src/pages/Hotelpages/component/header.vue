<template>
  <div class="header">
    <div class="header-bar">
        <div class="header-icon" @click="back">
          <img src="@/assets/images/left123.png" alt="">
        </div>
        <div class="header-title">
          <div class="city">
            <span>{{city}}</span>
          </div>
          <div class="date">
            <span>
              {{date.Month1}}月{{date.Day1}}日 -- {{date.Month2}}月{{date.Day2}}日
            </span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['city','date']),
  },
  methods:{
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    height: 3rem;
    background-color: #fff;
    font-weight: 100;
    position: relative;
    border-bottom: 1px solid rgb(242,242,242);
    position: sticky;
    top: 0;
    z-index: 100;
    .header-bar{
      display: flex;
      align-items: center;
      height: 3rem;
      .header-icon{
        width: 1.2rem;height: 1.2rem;
        margin-left: 1rem;
        
        img{
          width: 100%;height: 100%;
        }
      }
      .header-title{
        margin: 0 auto;
        transform: translateX(-1rem);
        .city{
          font-size: 1rem;
          text-align: center; 
        }
        .date{
          font-size: 0.6rem;
          text-align: center;
        }
      }
    }
  }
</style>