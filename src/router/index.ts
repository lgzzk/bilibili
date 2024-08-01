import {createMemoryHistory, createRouter} from 'vue-router'


const routes = [
    {path: '/', component: () => import('../pages/index/index.vue')},
]
const router = createRouter({
    history: createMemoryHistory('bilibili'),
    routes,
})
export default router
