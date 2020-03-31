const state = {
  login:false,
  city: '上海',
  date:{
    Month1: (new Date()).getMonth() + 1,
    Day1: (new Date()).getDate(),
    Month2: (new Date()).getMonth() + 1,
    Day2: (new Date()).getDate() + 1
  },
  hotelLists:[]
}

export default state