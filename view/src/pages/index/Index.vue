<template>
  <div class="hello">
    <!-- <h1>欢迎来到马蜂窝</h1> -->
    <div class="header">
      <logo>
        <Search slot="search"></Search>
        <div slot="icon" class="icon" @click="goToDL" v-if="!login">
          <a class="icon-a">登录</a>
        </div>
        <div slot="icon" class="icon userimg" v-else @click="goToUser">
          <img :src="userImg" alt />
        </div>
      </logo>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" @change="swipeChange" >
        <van-swipe-item v-for="(item,index) in indexBanner" :key="index">
          <div class="banner-img" :style="`background-image:url(${item.image_url})`"></div>
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <div  ref="slider"></div>
          </div>
        </template>
      </van-swipe>
    </div>
    <div class="icon">
      <div class="icon-bar">
        <ul>
          <li v-for="(item,index) in iconList" :key="index">
            <div class="icon-bgc" @click="handRouter(item.name)">
              <div class="icon-item" :style="{backgroundColor:item.color}">
                <img :src="item.icon" alt />
              </div>
              <div class="icon-title" :style="{color:item.color}">{{item.title}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="guideflow">
      <div class="guideflow-title">
        <span class="text">
          <span style="color:yellow;font-size:25px">|</span>
          推荐游记
        </span>
      </div>
      <div class="content" style="height:170px" v-for="(item,index) in indexLiList" :key="index">
          <div class="guideflow-content-title">
            {{item.text1}}
            <div class="tag">
              <img
                src="https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png"
                alt
              />
            </div>
          </div>
          <dl class="clearfix">
            <dt>
              <img :src="item.image_url1" alt />
            </dt>
            <dd>
              <div class="summary">{{item.text2}}</div>
              <div class="extra">
                <div class="extra-title">
                  <span>{{item.text3}}</span>
                </div>
                <div class="author">
                  <span>{{item.author}}</span>
                  <img :src="item.image_url2" alt class="author-img" />
                </div>
              </div>
            </dd>
          </dl>
      </div>
    </div>
    <div class="load" v-if="indexLiList.length <= 15" @click="loadMore">点击加载更多</div>
    <div class="load" v-else>没有更多了~~~</div>
  </div>
</template>

<script>
import logo from "./component/logo";
import Search from "./component/Search";
import { mapState,mapActions } from "vuex";
export default {
  name: "Index",
  computed: {
    ...mapState(["login",'indexLiList','indexBanner','pageSize'])
  },
  data() {
    return {
      userImg: "",
      iconList: [
        {
          title: "看游记",
          icon: require("@/assets/images/youji1.png"),
          color: "#feca2b",
          name: "youji"
        },
        {
          title: "酒店",
          icon: require("@/assets/images/jiudian.png"),
          color: "#32a2f1",
          name: "Hotel"
        },

        {
          title: "机票",
          icon: require("@/assets/images/jipiao.png"),
          color: "#acce0e",
          name: "jipiao"
        },
        {
          title: "当地玩乐",
          icon: require("@/assets/images/wanle.png"),
          color: "#b160df",
          name: "wanle"
        },
        {
          title: "找攻略",
          icon: require("@/assets/images/gonglve.png"),
          color: "#ff9d00",
          name: "gonglve"
        },
        {
          title: "去旅行",
          icon: require("@/assets/images/qulvhang.png"),
          color: "#fd4e4e",
          name: "lvxing"
        },
        {
          title: "问达人",
          icon: require("@/assets/images/wen.png"),
          color: "#42d6ba",
          name: "daren"
        },
        {
          title: "我的",
          icon: require("@/assets/images/jieban.png"),
          color: "#f94a87",
          name: "user"
        }
      ],
    };
  },
  components: {
    logo,
    Search
  },
  mounted() {
    this.getIndexBanner();
    this.getIndexList();
    if (sessionStorage.getItem("userInfo")) {
      this.userImg = JSON.parse(sessionStorage.getItem("userInfo")).img;
    }
  },
  methods: {
    ...mapActions(['getIndexList','getIndexBanner']),
    swipeChange(e){
      this.$refs.slider.style.transition = 'transform 400ms ease-out'
      this.$refs.slider.style.transform = `translate(${e*2.1}rem)`
    },
    handRouter(id) {
      if (id == "user") {
        if (this.login == false) {
          this.$router.push({ path: "/login" });
          this.$toast("请先登录");
        } else {
          this.$router.push({ path: `/${id}` });
        }
      } else {
        this.$router.push({ path: `/${id}` });
      }
    },
    goToDL() {
      this.$router.push({ path: "/login" });
    },
    loadMore() {
      this.getIndexList();
    },
    goToUser() {
      this.$router.push({ path: "/user" });
    }
  }
};
</script>
<style scoped>
@import "./index.css";
</style>



