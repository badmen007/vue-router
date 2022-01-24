import Vue from 'vue'
import VueRouter from '@/vue-router'
// import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// {'/':Home, '/a': HomeA, '/b': HomeB}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[ //孩子里面路径不加/
      {
        path: 'a',
        component:{
          render: (h) => <h1>a</h1>
        }
      },
      {
        path: 'b',
        component:{
          render: (h) => <h1>b</h1>
        }
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
