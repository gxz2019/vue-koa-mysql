<template>
  <div class="hotelDetail">
    <div class="img">
      <img
        src="https://p1-q.mafengwo.net/s10/M00/1B/3E/wKgBZ1mbFTqATyxmACl3qM_XDqI24.jpeg?imageMogr2%2Fthumbnail%2F1336x%2Fquality%2F90"
        alt
      />
      <div class="i" @click="goBack">
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
          <img src="https://b1-q.mafengwo.net/s12/M00/C5/71/wKgED1v1KzOABhxaAAAZQ2NtJSs065.png" alt />
          <div>
            <span>买买买住这</span>
          </div>
          <div>
            <span>近地铁</span>
          </div>
          <div class="special">
            <span>商务出行</span>
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="https://n1-q.mafengwo.net/s14/M00/6A/2F/wKgE2l0dXgOAM5vsAABvY5TUqLM740.png" alt />
    </div>
    <div class="white"></div>
    <div class="date">
      <div>
        <span>
          入&nbsp;05月07日&nbsp;&nbsp;
          <div>
            <span>1晚</span>
          </div>&nbsp;&nbsp;离&nbsp;05月08日
        </span>
      </div>
    </div>
    <div class="hotel">
      <div class="hotels" v-for="item in list.slice(0,page)" :key="item.id">
        <div>
          <img :src="item.imgUrl" alt />
        </div>
        <div>
          <div>{{item.name}}</div>
          <div>双床</div>
        </div>
        <div>
          <span>￥{{item.price}}</span>
          <span>/晚</span>
        </div>
      </div>
    </div>
    <div class="rest" v-if="page<5" @click="handClick">
      <span>展开剩余房型</span>
      <i class="iconfont">&#xe65e;</i>
    </div>
    <div class="white white1"></div>
    <div class="comments">
      <div>
        <div>
          <span>蜂蜂点评</span>
        </div>
        <div>
          <i class="iconfont">&#xe608;</i>
          <span>写点评</span>
        </div>
      </div>
      <div>
        <div v-for="item in commentList" :key="item.id">
          <span>{{item.comment}}</span>
        </div>
      </div>
      <div></div>
    </div>
    <div class="banner">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import { getHotelDetail } from "../../api/api";
export default {
  data() {
    return {
      commentList: [
        { id: 1, comment: "精选游记(1)" },
        { id: 2, comment: "服务好(15)" },
        { id: 3, comment: "环境不错(19)" },
        { id: 4, comment: "床很舒服(12)" },
        { id: 5, comment: "酒店很新(21)" },
        { id: 6, comment: "早餐丰富(55" }
      ],
      routeId: null,
      show: true,
      list: [],
      page: 4
    };
  },
  mounted() {
    this.routeId = this.$route.params.id;
    getHotelDetail().then(res => {
      this.list = res.data.hotelDetail;
    });
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    handClick() {
      this.page = this.list.length;
    },
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="less">
@import "./hotelDeatil.less";
</style>