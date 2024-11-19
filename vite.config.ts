import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";
import svgLoader from 'vite-svg-loader';
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader(), vueDevTools()],
    base: 'bilibili',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://api.bilibili.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
                headers: {
                    Referer: 'https://www.bilibili.com/'
                }
            }, '/search': {
                target: 'https://s.search.bilibili.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/search/, ''),
                headers: {
                    Referer: 'https://www.bilibili.com/'
                }
            }, '/live': {
                target: 'https://api.live.bilibili.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/live/, ''),
                headers: {
                    Referer: 'https://www.bilibili.com/'
                }
            },
            '/host': {
                target: 'https://www.bilibili.com/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/host/, '')
            }, '/range': {
                target: 'https://www.lgzzk.site/',
                changeOrigin: true,
            }
        }
    }
})
