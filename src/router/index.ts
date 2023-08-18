import {createRouter, createMemoryHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/hello/:id',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router