import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader()],
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
                rewrite: path => path.replace(/^\/api/, '')
            }, '/search': {
                target: 'https://s.search.bilibili.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
