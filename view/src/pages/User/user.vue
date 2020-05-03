<template>
  <div>
    <div class="header">
      <div class="header-icon" @click="handClick">
        <i class="iconfont icon-zuo-copy" style="color:#ffa800"></i>
      </div>
      <div class="header-span">
        <span>我的窝</span>
      </div>
      <div class="header-icon header-icon1">
        <i class="iconfont icon-shezhi" style="color:#ffffff"></i>
      </div>
    </div>
    <div class="userMsg">
      <div class="userMsg-img">
        <img :src="userMsg.img" alt />
      </div>
      <div class="userMsg-span">
        <span>{{userMsg.nickname}}</span>
      </div>
    </div>
    <div class="item" v-for="(item,index) in itemList" :key="index" @click="handPopup(index)">
      <div class="item-icon">
        <img :src="item.img" alt class="image" />
      </div>
      <div class="item-span">
        <span>{{item.title}}</span>
      </div>
      <div class="item-icon1">
        <img src="../../assets/images/right-row.png" alt />
      </div>
    </div>
    <div class="exit" @click="handExit">
      <span>退出登录</span>
    </div>
    <van-popup v-model="show1" position="right" :style="{ width: '100%', height:'100%'}">
      <div class="container">
        <div class="i">
          <div @click="returnLast"><i class="iconfont">&#xe607;</i></div>
          <div><span>我的订单</span></div>
        </div>
        <div class="content" >
          <div><span>锦江都城经典(上海南京东路外滩店)</span></div>
          <div><span>风雅双人房</span></div>
          <div class="date">
            <span>入住：5月17日</span>
            <span class="boder">共一晚</span>
            <span>入住：5月18日</span>
          </div>
          <div class="tell"><span> 北京时间2020-05-15 18:00前可免费取消此订单，逾期无法免费取消或退款。
    </span></div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  mounted() {
    this.userMsg = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  data() {
    return {
      itemList: [
        {
          img: require("../../assets/images/collect.png"),
          title: "我的收藏"
        },
        {
          img: require("../../assets/images/icon123.png"),
          title: "我的游记"
        },
        {
          img: require("../../assets/images/dingdan.png"),
          title: "我的订单"
        },
        {
          img: require("../../assets/images/dianping.png"),
          title: "我的点评"
        }
      ],
      userMsg: {},
      show1: false
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    handPopup(i) {
      if (i == 2) {
        this.show1 = true;
      }
    },
    returnLast() {
      this.show1 = false
    },
    handClick() {
      this.$router.push({ path: "/index" });
    },
    handExit() {
      this.$toast("成功退出");
      this.$router.push({ path: "/index" });
      sessionStorage.clear();
      let a = false;
      this.changeLogin(a);
    }
  }
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  display: flex;
  /* flex-wrap: nowrap; */
  flex-flow: row;
  height: 3rem;
  line-height: 3rem;
  .header-icon {
    flex: 1;
    text-align: center;
    i {
      font-size: 1.5rem;
    }
  }
  .header-span {
    flex: 8;
    text-align: center;
    font-size: 1.2rem;
    color: #666;
  }
}

.userMsg {
  background-image: url("../../assets/images/userbg.jpg");
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 10rem;
  position: relative;
  .userMsg-img img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid #fff;
    transform: translateY(1.5rem);
  }
  .userMsg-span {
    color: #ffffff;
    transform: translateY(2rem);
  }
}

.item {
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  .item-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #ffa800;
    display: flex;
    align-items: center;
    justify-content: center;
    .image {
      width: 50%;
      height: 50%;
    }
  }
  .item-span {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(1rem);
  }
  .item-icon1 {
    position: absolute;
    right: 0;
  }
}
.exit {
  position: fixed;
  bottom: 0;
  left: 1rem;
  width: 90%;
  margin: 0 auto;
  height: 3rem;
  background-color: #ffa800;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 3rem;
}
.container {
  width: 100%;
  height: 100%;
  background: #008c8c;
  color: #fff;
  .i{
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    position: relative;
    div:nth-child(1) {
      .iconfont{
        font-size: 1.8rem;
      }
    }
    div:nth-child(2) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .content{
    width: 90%;
    height: 15rem;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 1rem;
    border-radius: 10px;
    color: #242629;
    div:nth-child(1) {
      text-align: center;
      color:#008c8c;
      font-weight: 800;
      padding: 0.5rem;
      font-size: 18px;
    }
    div:nth-child(2) {
      font-weight: 600;
      margin-left: 0.5rem;
    }
    .date{
      // margin-left: 0.5rem;
      margin-top: 0.5rem;
      span{
        font-size: 0.8rem;
        padding: 0.5rem;
      }
      .boder{
        border: 1px solid #717376;
        padding: 0.1rem;
        border-radius: 10px;
        color: #717376;
      }
    }
    .tell{
      margin:0.5rem 0.5rem 0 0.5rem ;
      color: #39A102;
      font-size: 12px;
    }
  }
}

</style>