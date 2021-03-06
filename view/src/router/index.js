import Vue from 'vue'
import Router from 'vue-router'
import Cover from '../pages/Cover/Cover'
import Index from '@/pages/index/Index'
import Login from '@/pages/login/login'
import User from '@/pages/User/user'
import Hotel from '@/pages/Hotel/Hotel'
import City from '@/pages/City/city'
import HotelPages from '@/pages/Hotelpages/hotelpages'
import HotelDetail from '@/pages/HotelDetail/hotelDetail'
import YouJi from '@/pages/youji/youji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta:{
        title:'主页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta:{
        title:'用户'
      }
    },
    {
      path: '/Hotel',
      name: 'Hotel',
      component: Hotel,
      meta:{
        title:'酒店'
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City,
      meta:{
        title:'城市选择'
      }
    },
    {
      path: '/hotelpages',
      name: 'HotelPages',
      component: HotelPages,
      meta:{
        title:'酒店页面'
      }
    },
    {
      path: '/hoteldetail/:id',
      name: 'HotelDetail',
      component: HotelDetail,
      meta:{
        title:'酒店详情页面'
      }
    },
    {
      path: '/youji/:id',
      name: 'youji',
      component: YouJi,
      meta:{
        title:'游记'
      }
    }
  ]
})
