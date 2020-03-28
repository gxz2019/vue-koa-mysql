const knex= require('../mysql/mysql')

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
  console.log(num)
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
module.exports = {
  getBanner,getStrategy,gethotCities,getCities,getHotels
}
