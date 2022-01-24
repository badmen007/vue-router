import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  name:'root',
  router,
  render: h => h(App)
}).$mount('#app')



/* 
前端路由
1.hash模式 根据hash的不同渲染不同的组件 window.addEventListener('popstate')监控到hash值得变化
hash 路由的问题: 有锚点# 比较难看  服务端无法根据对应的路径来解析内容 不需要服务端支持

2.history模式 
没有锚点#  可以改变路径   强制刷新的时候 会带上路径服务端可以解析路径 支持seo优化  需要服务端支持

那么服务端怎么去支持呢？ 
*/