// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe,SwipeItem,Calendar, Uploader,Toast,Icon,Popup} from 'vant'
import 'vant/lib/index.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem).use(Calendar).use(Uploader).use(Toast).use(Icon).use(Popup)

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
