const router = require('koa-router')({
  prefix:'/gxz'
})

const constrollers = require('../controllers/index')

router.get('/banner',constrollers.getBanner)
router.get('/strategy',constrollers.getStrategy)
router.get('/hotCities',constrollers.gethotCities)
router.get('/cities',constrollers.getCities)
router.get('/hotels',constrollers.getHotels)

module.exports = router