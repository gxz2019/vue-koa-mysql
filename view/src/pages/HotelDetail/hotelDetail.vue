<template>
  <div class="hotelDetail">
    <div class="img">
      <img
        src="https://p1-q.mafengwo.net/s10/M00/1B/3E/wKgBZ1mbFTqATyxmACl3qM_XDqI24.jpeg?imageMogr2%2Fthumbnail%2F1336x%2Fquality%2F90"
        alt
      />
      <div class="i">
        <i class="iconfont">&#xedff;</i>
      </div>
      <div class="c" v-if="show" @click="changeShow">
        <i class="iconfont">&#xe602;</i>
      </div>
      <div class="d" v-else @click="changeShow">
        <i class="iconfont">&#xe601;</i>
      </div>
      <div class="comment">
        <div>
          <div>
            <span class="big">
              4.8
              <span>/5</span>
            </span>
          </div>
          <div>
            <span>非常棒</span>
          </div>
        </div>
        <div class="two">
          <div>
            <span>“服务好”</span>
          </div>
          <div>
            <span>1游记 193蜂蜂评论</span>
          </div>
        </div>
      </div>
    </div>
    <div class="name">
      <div class="container">
        <div>
          <span>靖江都城经典(上海外滩路外滩店)</span>
          <span>高档酒店</span>
        </div>
        <div>
          <span>2015年装修</span>
          <i class="iconfont">&#xee00;</i>
          <span>客房服务</span>
          <i class="iconfont">&#xee00;</i>
          <span>行李存放服务</span>
          <i class="iconfont">&#xee00;</i>
          <span>洗衣服务</span>
        </div>
        <div>
          <img src="https://b1-q.mafengwo.net/s12/M00/C5/71/wKgED1v1KzOABhxaAAAZQ2NtJSs065.png" alt="">
          <div><span>买买买住这</span></div>
          <div><span>近地铁</span></div>
          <div class="special"><span>商务出行</span></div>
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="https://n1-q.mafengwo.net/s14/M00/6A/2F/wKgE2l0dXgOAM5vsAABvY5TUqLM740.png" alt="">
    </div>
    <div class="white">
    </div>
    <div class="date">
      <div>
        <span>入&nbsp;05月07日&nbsp;&nbsp;<div><span>1晚</span></div>&nbsp;&nbsp;离&nbsp;05月08日</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeId: null,
      show: true
    };
  },
  mounted() {
    this.routeId = this.$route.params.id;
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped lang="less">
@import "./hotelDeatil.less";
</style>