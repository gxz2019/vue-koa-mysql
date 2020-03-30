const mutatitons = {
  changCity(state,city) {
    state.city = city
  },
  changDate(state,date) {
    state.date = date 
  },
  transmitIndex(state,index) {
    state.letter = index
  },
  changeLogin(state,login) {
    state.login = login
  }
}
export default mutatitons