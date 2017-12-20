import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

Vue.use(Router)
export default new Router({
  routes : [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      iconCls: 'el-icon-tickets',//图标样式class
      meta: {
        rToken: true
      },
      //hidden: true,     //表示不显示
      //leaf: true,       //代表只有一个节点
      children: [
        {path: '/page1',name:'page1',component: Page1},
        {path: '/page2',name:'page2',component: Page2},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    }
  ]
})