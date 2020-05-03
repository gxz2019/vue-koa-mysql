<template>
  <div class="YJ">
    <img :src="item.image_url1" alt="">
    <h1>{{item.text1}}</h1>
    <div class="item">
      <img :src="item.image_url2" alt="">
      <div>
        <span>{{item.author}}</span>
        <span>{{item.text3}}</span>
      </div>
    </div>
    <div>
      <p>
        {{item.text2}}
      </p>
    </div>
    <div class="title">
      <div><span>展开全文</span></div>
      <img src="https://c4-q.mafengwo.net/s10/M00/16/D2/wKgBZ1o3WXOAZQ-vAAAHM2Kece0574.png" alt="">
    </div>
    <div class="more">
      <span>APP内查看更多游记</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      routeId: Number,
      item:[]
    };
  },
  computed:{
    ...mapState(['indexLiList'])
  },
  mounted() {
    this.routeId = this.$route.params.id;
    this.item = this.indexLiList[this.routeId]
  }
};
</script>

<style scoped lang="less">
.YJ{
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 13rem;
  }
  h1{
    color: #474747;
    margin: 1rem;
  }
  .item{
    display: flex;
    align-items: center;
    img{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    span{
      color: #696969;
      font-size: 1rem;
      display: block;
    }
  }
  p{
    // padding: 10px;
    color: #474747;
    margin: 30px;
    font-size: 18px;
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F7D44A;
    margin-bottom: 2rem;
    img{
      width: 1.1rem;
      height: 0.8rem;
    }
  }
  .more{
    width: 90%;
    height: 2rem;
    margin: 0 auto;
    color: #474747;
    background-color: #F7D44A;
    border-radius: 5px;
    text-align: center;
    line-height: 2rem;
    margin-bottom: 4rem;
  }
}
</style>