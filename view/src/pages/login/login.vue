<template>
  <div class="container">
    <div class="header">
      <div class="logo" @click="toIndex">
        <img src="../../assets/images/logo123.png" alt />
      </div>
    </div>
    <div class="login">
      <div :class="{'active':isActive,'active2':isActive2}" @click="handClick">
        <span>登录</span>
      </div>
      <div :class="{'active2':isActive,'active':isActive2}" @click="handClick1">
        <span>注册</span>
      </div>
    </div>
    <div class="input" v-if="isActive == true">
      <div>
        <div>
          <input type="text" placeholder="您的邮箱/手机号" @change="getTel" />
        </div>
        <div>
          <input type="password" placeholder="您的密码" @change="getPassword" />
        </div>
        <div class="log" @click="handLogin">
          <span>登录</span>
        </div>
      </div>
    </div>
    <div class="input" v-else>
      <div>
        <div>
          <input type="text" placeholder="您的昵称" @change="getNick" />
        </div>
        <div>
          <input type="text" placeholder="您的邮箱/手机号" @change="getTel" />
        </div>
        <div>
          <input type="password" placeholder="您的密码" @change="getPassword" />
        </div>
      </div>
      <van-uploader  v-model="list" :max-count="1" :after-read="afterRead" accept="image/*.*" >
        <!-- 上传照片 -->
      </van-uploader>
      <div>
        <span>(点击上传头像)</span>
      </div>
      <div class="register" @click="register">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserMsg,register } from '../../api/api'
import { mapMutations,mapState,mapActions } from 'vuex'
export default {
  data() {
    return {
      list:[],
      isActive: true,
      isActive2: false,
      imgUrl:"",
      nickName: "",
      userName: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    toIndex() {
      this.$router.go(-1);
    },
    handClick() {
      if (this.isActive) {
        return;
      } else {
        this.isActive = true;
        this.isActive2 = false;
      }
    },
    handClick1() {
      if (!this.isActive2) {
        this.isActive2 = true;
        this.isActive = false;
      } else {
        return;
      }
    },
    afterRead(file) {
      this.imgUrl = file.content
      console.log(file)
    },
    getNick(e) {
      this.nickName = e.target.value
    },
    getTel(e) {
      this.userName = e.target.value;
    },
    getPassword(e) {
      this.password = e.target.value;
    },
    //登录
    handLogin() {
      let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      let reg2 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.userName === "" || this.password === "") {
        this.$toast("账号、密码不能为空");
        return;
      } else if (!reg.test(this.userName) && !reg2.test(this.userName)) {
        this.$toast("请输入有效的手机号或邮箱");
        return;
      } else if (this.password.length < 6) {
        this.$toast("密码不能少于6位");
        return;
      } else if (this.password.length > 15) {
        this.$toast("密码过长");
        return;
      }
      getUserMsg({userName:this.userName,password:this.password}).then((res) => {
        sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
        if(res.data.code == '404') {
          this.$toast(res.data.mess)
        }
        if(res.data.code == '200') {
          let login = true
          this.$toast(res.data.mess)
          this.$router.push({path:'/user'})
          this.changeLogin(login)
        }
      }).catch(err => {console.log(err)})
    },
    register() {
      let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      let reg2 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.userName === "" || this.password === "") {
        this.$toast("账号、密码不能为空");
        return;
      } else if (!reg.test(this.userName) && !reg2.test(this.userName)) {
        this.$toast("请输入有效的手机号或邮箱");
        return;
      } else if (this.password.length < 6) {
        this.$toast("密码不能少于6位");
        return;
      } else if (this.password.length > 15) {
        this.$toast("密码过长");
        return;
      }
      register({nickName:this.nickName,username:this.userName,password:this.password,img:this.imgUrl}).then(res => {
        sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
        if(res.data.code == '800') {
          this.$toast(res.data.mess)
        }
        if(res.data.code == '801') {
          this.$toast(res.data.mess)
        }
        if(res.data.code == '200') {
          this.$toast('注册成功')
          let a = true
          this.changeLogin(a)
          this.$router.push({path:'/user'})
        }
      }).catch(err => {console.log(err)})
    }
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  text-align: center;
  .header {
    width: 90%;
    height: 4rem;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    // border-bottom: 2px solid #ffba33;
    .logo {
      width: 7.2rem;
      height: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .login {
    display: flex;
    margin-top: 1rem;
    height: 2rem;
    width: 90%;
    margin: 0 auto;
    div {
      height: 1.9rem;
      flex: 1;
      padding-top: 0.5rem;
      line-height: 1.9rem;
    }
    .active {
      border-top: 2px solid #ffba33;
      color: #ffba33;
    }
    .active2 {
      border-top: 2px solid #999999;
      color: #999999;
      background-color: #fafafa;
    }
  }
  .input {
    margin-top: 3rem;
    div {
      div {
        border-radius: 10px;
        width: 87%;
        margin: 0 auto;
        height: 2.65rem;
        border-radius: 4px;
        border: 1px solid #dadada;
        margin-top: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          border: none;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
    .van-uploader {
      margin-top: 1rem;
      //  background-color: rgb(87,113,125);
    }
    .log {
      background-color: #ffba33;
      color: #ffffff;
    }
    .register {
      background-color: #ffba33;
      color: #ffffff;
      width: 87%;
      margin: 0 auto;
      font-size: 1rem;
      height: 3rem;
      line-height: 3rem;
      margin-top: 1rem;
    }
  }
}
</style>