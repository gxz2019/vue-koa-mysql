const state = {
  login:false,      //是否登录
  letter:null,     //city页面的字母index
  pageSize:1,       //分页
  city: '上海',     //城市
  date:{            //日历默认日期
    Month1: (new Date()).getMonth() + 1,
    Day1: (new Date()).getDate(),
    Month2: (new Date()).getMonth() + 1,
    Day2: (new Date()).getDate() + 1
  },
  indexBanner:[],  //首页轮播图
  indexLiList:[],  //首页列表
  hotelLists:[], //酒店列表
  hotCities:[],   //热门城市
  cities:[],   //城市列表
}

export default state