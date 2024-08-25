import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {path: '/', component: () => import('../pages/index/index.vue')},
    {path: '/video', redirect: '/'},
    {path: '/video/:bvid', component: () => import('../pages/video/index.vue'),props: true},
]
const router = createRouter({
    history: createWebHistory('bilibili'),
    routes,
})
export default router
