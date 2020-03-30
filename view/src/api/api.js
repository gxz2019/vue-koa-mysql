import axios from 'axios'
import QS from 'qs'

let host = '/api/gxz'


let http = axios.create({
  baseURL:host,
  timeout:1000,
  // headers:{
  //   'Content-Type':'application/json'
  // }
})

//获取首页轮播图
export const getBanner = (params) => {
  return http.get('/banner',{params:params})
}

//获取首页List
export const getList = (params) => {
  return http.get('/strategy',{params:params})
}

//获取热门城市
export const getHotCities = (params) => {
  return http.get('/Hotcities',{params:params})
}

//获取城市
export const getCities = (params) => {
  return axios.get('../../../static/city.json',{params:params})
}

//酒店
export const getHotels = (params) => {
  return http.get('/hotels',{params:params})
}

//获取酒店详情
export const getHotelDetail = (params) => {
  return http.get('/hoteldetail',{params:params})
}

//验证用户信息
export const getUserMsg = (params) => {
  return http.post('/userlogin',params)
}

//注册

export const register = (params) => {
  return http.post('/userregister',params)
}


