// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)    //使用ele组件

//路由拦截
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('userToken');
  }
  if(to.meta.rToken){   //根据路由rtoken值判断该模块是否需要登录权限
    if(sessionStorage.userToken == '' || typeof(sessionStorage.userToken) == 'undefined') {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  //跳转前的页面转到登录页面
      })
    } else {
    // if (store.state.token) {  // 通过vuex state获取当前的token是否存在
    //   next();
    // }
      next()
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
