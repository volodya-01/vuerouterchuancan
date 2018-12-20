import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestVueRouter from '@/components/testVueRouter'
import TestVueRouterTo from '@/components/testVueRouterTo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'TestVueRouter',
      component: TestVueRouter
    },
    {
      path: '/testVueRouterTo',
      // 一定要写name,params必须用name来识别路径
      name: 'TestVueRouterTo',
      component: TestVueRouterTo
    }
  ]
})
