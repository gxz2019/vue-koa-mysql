const knex= require('../mysql/mysql')
const fs = require('fs')

const getBanner = async (ctx)  => {
  const banner = await knex('mfw_index_banner').select()
  ctx.body = {
    'banner' : banner,
  }
} 
const getStrategy = async (ctx) => {
  // let num = ctx.request.body.num;
  let num = ctx.query.page;
  const strategy = await knex('mfw_index_strategy').where({page:num}).select()
  ctx.body = {
    'strategy':strategy
  }
}
const gethotCities = async (ctx) => {
  const hotCities = await knex('mfw_index_hotcities').select()
  ctx.body = {
    'hotCities':hotCities
  }
}
const getCities = async (ctx) => {
  const cities = await knex('mfw_index_cities').select()
  ctx.body = {
    'cities':cities,
  }
}
const getHotels = async (ctx) => {
  const hotels = await knex('mfw_hotel').select()
  ctx.body = {
    'hotels':hotels
  }
}
const getHotelsDetail = async(ctx) =>{
  const hotelDetail = await knex('mfw_hotel_detail').select()
  ctx.body = {
    'hotelDetail':hotelDetail
  }
}

//登录
const getUserLogin = async(ctx) => {
  let _username = ctx.request.body.userName
  let _usepwd = ctx.request.body.password
  const userLogin = await knex('mfw_user').where({username:_username,password:_usepwd}).select()
  
  if(userLogin.length){
    let result = {
      nickname:userLogin[0].nickname,
      img:userLogin[0].img
    }
    ctx.body = {
      data:result,
      code:'200',
      mess:'登录成功'
    }
  }else{
    ctx.body = {
      code:'404',
      mess:'账号或密码错误'
    }
  }
}

//注册
const userRrgister = async(ctx) => {
  let _username = ctx.request.body.username
  let _nickname = ctx.request.body.nickName
  let _pwd = ctx.request.body.password
  let _img = ctx.request.body.img
  const findUserName = await knex('mfw_user').where({username:_username}).select()
  const findUserNickName = await knex('mfw_user').where({nickname:_nickname}).select()
  if(findUserName.length) {
    ctx.body = {
      code:'800',
      mess:'账号已存在'
    }
    return 
  }
  if(findUserNickName.length){
    ctx.body = {
      code:'801',
      mess:'昵称已存在'
    }
    return 
  }
  const insertUserInfo = await knex('mfw_user').insert({username:_username,nickname:_nickname,password:_pwd,img:_img})
  let result = {
    nickname:_nickname,
    img:_img
  }
  ctx.body = {
    code:'200',
    mess:'注册成功',
    data:result
  }
}

//酒店评论
const hotelComments = async(ctx) => {
  const comments = await knex('mfw_hotel_comment').where({hotelid:0}).select()
  ctx.body = {
    'hotelComments':comments
  }
}
module.exports = {
  getBanner,getStrategy,gethotCities,getCities,getHotels,getHotelsDetail,getUserLogin,
  userRrgister,hotelComments
}
