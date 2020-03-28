<template>
  <div class="hotelList">
    <Scroll ref="wrapper" :data="hotelList" class="scroll">
    <div class="item">
      <div class="hotelList-content" v-for="(item) in hotelList" :key="item.id" @click="handClick(item.id)">
      <div class="img">
        <img :src="item.imgUrl" alt />
      </div>
      <div class="title">
        <div class="aa">
          <h3 class="hide">{{item.title}}</h3>
        </div>
        <div class="title1">
          <span>{{item.en}}</span>
        </div>
        <div class="title2">{{item.num1}}蜂评,{{item.two}}游记提及</div>
        <div class="money">
          <strong style="color: #F94226">￥{{item.price}}</strong>
          <span style="font-size:0.8rem">起</span>
        </div>
      </div>
    </div>
    </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '../../Common/scroll'
export default {
  props: {
    hotelList: Array
  },
  components:{
    Scroll
  },
  methods:{
    handClick(id) {
      this.$router.push({path:`/hoteldetail/${id}`})
    }
  }
};
</script>

<style lang="less" scoped>

.scroll {
   width:100%;
  height: calc(100vh - 1rem);;
  .hotelList-content {
    width: 90%;
    height: 8rem;
    margin: 0 auto;
    display: flex;
    margin-top: 1rem;
    position: relative;
    border-bottom: 1px solid rgb(242,242,242);
    img {
      background-color: black;
      width: 6.2rem;
      margin-right: 1rem;
    }
    .title {
      
      .aa{
        .hide{
        width: 14rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        }
      }
      .title1 {
        font-size: 1rem;width: 14rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .title2 {
        font-size: 0.85rem;
        width: 14rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .money {
        font-size: 1.3rem;
        float: right;
        position: absolute;
        right: 0;
        bottom: 1.48rem;
      }
    }
  }
}
</style>